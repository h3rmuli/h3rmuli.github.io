import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function DesktopLightbox({ pics }) {
  const [picIndex, setPicIndex] = useState(0);
  const [modalPicIndex, setModalPicIndex] = useState(0);
  const [showLBmodal, setShowLBModal] = useState(false);
  const [currentPic, setCurrentPic] = useState(pics[modalPicIndex]);
  const active = 'rounded-lg ring-2 ring-ora';
  const inactive = 'rounded-lg';
  const activePic = 'rounded-lg opacity-50';
  const inactivePic = 'rounded-lg';

  const toggleLBModal = () => {
    setShowLBModal(!showLBmodal);
  };

  const pictureHandler = (value) => {
    switch (value) {
      case 'previous':
        if (modalPicIndex > 0) {
          const temp = modalPicIndex - 1;
          setModalPicIndex(temp);
          setCurrentPic(pics[temp]);
        }
        break;
      case 'next':
        if (modalPicIndex < pics.length - 1) {
          const temp = modalPicIndex + 1;
          setModalPicIndex(temp);
          setCurrentPic(pics[temp]);
        }
        break;
      default:
        setModalPicIndex(0);
        setCurrentPic(pics[modalPicIndex]);
    }
  };

  const ModalLightBox = ({ onClose, pics, previous, next }) => {
    return (
      <>
        <div className="flex fixed top-0 h-screen w-screen items-center justify-center bg-black/75 z-50">
          <div className="relative">
            <img
              className="max-h-[450px] rounded-lg"
              src={pics[modalPicIndex][0]}
            />
            <div
              className="absolute top-1/2 -left-5 bg-white text-black rounded-full w-10 h-10 font-bold text-center leading-10 cursor-pointer"
              onClick={previous}
            >
              &#60;
            </div>
            <div
              className="absolute top-1/2 -right-5 bg-white text-black rounded-full w-10 h-10 font-bold text-center leading-10 cursor-pointer"
              onClick={next}
            >
              &#62;
            </div>
            <svg
              className="absolute -top-7 right-0 cursor-pointer"
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => onClose()}
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
            <div className="grid grid-cols-4 gap-4 mt-6 absolute -bottom-50">
              {pics.map((pic, index) => (
                <div
                  className={modalPicIndex === index ? active : inactive}
                  onClick={() => setModalPicIndex(index)}
                  key={index}
                >
                  <img
                    className={
                      modalPicIndex === index ? activePic : inactivePic
                    }
                    src={pic[1]}
                    alt="Picture of a product"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <img
        className="rounded-lg"
        src={pics[picIndex][0]}
        onClick={() => toggleLBModal()}
      />
      {showLBmodal &&
        createPortal(
          <ModalLightBox
            pics={pics}
            previous={() => pictureHandler('previous')}
            next={() => pictureHandler('next')}
            onClose={() => toggleLBModal()}
          />,
          document.body
        )}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {pics.map((pic, index) => (
          <div
            className={picIndex === index ? active : inactive}
            onClick={() => setPicIndex(index)}
            key={index}
          >
            <img
              className={picIndex === index ? activePic : inactivePic}
              src={pic[1]}
              alt="Picture of a product"
            />
          </div>
        ))}
      </div>
    </>
  );
}
