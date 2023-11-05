export default function SendPost() {
  return (
    <>
      <div className="m-5 p-5 bg-white flex flex-row flex flex-wrap gap-x-5 justify-between items-center md:items-start">
        <div className="mt-4 md:mt-0 h-8 w-8  bg-black rounded-full"></div>
        <div className="-order-1 basis-full md:order-none md:basis-auto md:grow">
          <textarea
            placeholder="Add a comment..."
            rows="3"
            className="w-full resize-none rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-csred"
          />
        </div>
        <div className="mt-4 md:mt-0 py-3 px-6 rounded-md bg-cmblue text-white">
          SEND
        </div>
      </div>
    </>
  );
}
