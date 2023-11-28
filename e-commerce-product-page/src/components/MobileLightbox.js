export default function MobileLightbox({ pic, previous, next }) {
  return (
    <>
      <div className="relative">
        <img src={pic} />
        <div
          className="absolute top-1/2 left-5 bg-white text-black rounded-full w-10 h-10 font-bold text-center leading-10"
          onClick={previous}
        >
          &#60;
        </div>
        <div
          className="absolute top-1/2 right-5 bg-white text-black rounded-full w-10 h-10 font-bold text-center leading-10"
          onClick={next}
        >
          &#62;
        </div>
      </div>
    </>
  );
}
