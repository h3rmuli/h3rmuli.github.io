export default function Vote() {
  return (
    <>
      <div className="flex flex-row md:flex-col">
        <div className="bg-cgrey px-4 md:px-3 py-2 text-clgrey rounded-l-lg md:rounded-t-lg text-center cursor-pointer">
          +
        </div>
        <div className="bg-cgrey px-4 md:px-3 py-2 text-cmblue font-bold text-center cursor-not-allowed">
          12
        </div>
        <div className="bg-cgrey px-4 md:px-3 py-2 text-clgrey rounded-r-lg md:rounded-b-lg text-center cursor-pointer">
          -
        </div>
      </div>
    </>
  );
}
