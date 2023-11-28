import { useMediaQuery } from '@react-hook/media-query';
import DesktopLightbox from './DesktopLightbox';
import MobileLightbox from './MobileLightbox';
import product1_tb from '../images/image-product-1-thumbnail.jpg';
import product2_tb from '../images/image-product-2-thumbnail.jpg';
import product3_tb from '../images/image-product-3-thumbnail.jpg';
import product4_tb from '../images/image-product-4-thumbnail.jpg';
import product1 from '../images/image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';
import { useState } from 'react';

export default function Lightbox() {
  const pics = [
    [product1, product1_tb],
    [product2, product2_tb],
    [product3, product3_tb],
    [product4, product4_tb],
  ];
  const [picIndex, setPicIndex] = useState(0);
  const [currentPic, setCurrentPic] = useState(pics[picIndex]);

  const mobilePictureHandler = (value) => {
    switch (value) {
      case 'previous':
        if (picIndex > 0) {
          const temp = picIndex - 1;
          setPicIndex(temp);
          setCurrentPic(pics[temp]);
        }
        break;
      case 'next':
        if (picIndex < pics.length - 1) {
          const temp = picIndex + 1;
          setPicIndex(temp);
          setCurrentPic(pics[temp]);
        }
        break;
      default:
        setPicIndex(0);
        setCurrentPic(pics[picIndex]);
    }
  };

  const laptop = useMediaQuery('only screen and (min-width: 640px)');
  if (laptop) {
    return <DesktopLightbox pics={pics} />;
  } else {
    return (
      <MobileLightbox
        pic={currentPic[0]}
        previous={() => mobilePictureHandler('previous')}
        next={() => mobilePictureHandler('next')}
      />
    );
  }
}
