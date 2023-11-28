export default function ProductDescription() {
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
    </>
  );
}
