import { useState } from 'react';

export default function ProductDescription() {
  const [count, setCount] = useState(0);

  const countHandler = (e) => {
    if (e) {
      const temp = count + 1;
      setCount(temp);
    } else {
      const temp = count - 1;
      if (temp >= 0) {
        setCount(temp);
      }
    }
  };

  return (
    <>
      <h2 className="mt-10 text-ora uppercase font-bold font-Kumbh-Sans">
        Sneaker Company
      </h2>
      <h1 className="mt-3 text-3xl font-bold font-Kumbh-Sans">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mt-5 text-slate-500 font-Kumbh-Sans">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-wrap mt-5">
        <div className="text-3xl font-bold">$125.00</div>
        <div className="ml-5 px-2 bg-paleora rounded-lg text-ora font-bold leading-9">
          50%
        </div>
        <div className="grow"></div>
        <div className="sm:w-full text-slate-500 leading-9 line-through">
          $250.00
        </div>
      </div>
      <div className="flex flex-wrap mt-5 sm:mt-3 sm:gap-x-4">
        <div className="w-full sm:w-4/12 flex justify-between">
          <div
            className="bg-stone-200 py-7 pl-5 rounded-l-lg cursor-pointer"
            onClick={() => countHandler(false)}
          >
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                fill="#FF7E1B"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className="grow bg-stone-200"></div>
          <div className="bg-stone-200 py-4 font-bold">{count}</div>
          <div className="grow bg-stone-200"></div>
          <div
            className="bg-stone-200 py-6 pr-5 sm:py-6 rounded-r-lg cursor-pointer"
            onClick={() => countHandler(true)}
          >
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                fill="#FF7E1B"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-full sm:w-7/12 justify-center gap-x-2 py-4 bg-ora rounded-lg mt-4 sm:mt-0">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
              fillRule="nonzero"
            />
          </svg>
          <span className="text-white">Add to cart</span>
        </div>
      </div>
    </>
  );
}
