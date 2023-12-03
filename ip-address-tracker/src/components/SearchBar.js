export default function SearchBar() {
  return (
    <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
      <div className="flex flex-row flex-nowrap">
        <input
          className="basis-5/6 p-3 rounded-l-lg cursor-pointer"
          name="search"
          placeholder="Search for any IP address or domain"
        />
        <div className="basis-1/6 text-white bg-black hover:bg-slate-800 leading-7 py-2 px-4 text-2xl rounded-r-lg float-right text-center">
          &#62;
        </div>
      </div>
    </div>
  );
}
