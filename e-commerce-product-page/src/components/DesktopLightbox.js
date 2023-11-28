import { useState } from 'react';

export default function DesktopLightbox({ pics }) {
  const [picIndex, setPicIndex] = useState(0);
  const active = 'rounded-lg ring-2 ring-ora';
  const inactive = 'rounded-lg';
  const activePic = 'rounded-lg opacity-50';
  const inactivePic = 'rounded-lg';

  return (
    <>
      <img className="rounded-lg" src={pics[picIndex][0]} />
      <div className="grid grid-cols-4 gap-4 mt-6">
        {pics.map((pic, index) => (
          <div
            className={picIndex === index ? active : inactive}
            onClick={() => setPicIndex(index)}
          >
            <img
              className={picIndex === index ? activePic : inactivePic}
              src={pic[1]}
            />
          </div>
        ))}
      </div>
    </>
  );
}
