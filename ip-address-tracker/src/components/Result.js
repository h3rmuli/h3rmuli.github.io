export default function Result({ result }) {
  return (
    <>
      <div className="mt-12 mb-8 pb-8 md:pb-0 md:h-36 w-10/12 md:w-9/12 shadow-lg bg-white rounded-lg flex flex-col md:flex-row md:flex-nowrap items-center md:justify-around md:items-start md:gap-x-5">
        <div className="md:basis-1/4">
          <h2 className="text-center uppercase text-sm text-slate-500 font-semibold mt-5">
            IP Address
          </h2>
          <p className="text-center text-2xl font-bold mt-1">
            {result.ipaddress}
          </p>
        </div>
        <div className="md:basis-1/4">
          <h2 className="text-center uppercase text-sm text-slate-500 font-semibold mt-5">
            Location
          </h2>
          <p className="text-center text-2xl font-bold mt-1">
            {result.location}
          </p>
        </div>
        <div className="md:basis-1/4">
          <h2 className="text-center uppercase text-sm text-slate-500 font-semibold mt-5">
            Timezone
          </h2>
          <p className="text-center text-2xl font-bold mt-1">
            {result.timezone}
          </p>
        </div>
        <div className="md:basis-1/4">
          <h2 className="text-center uppercase text-sm text-slate-500 font-semibold mt-5">
            ISP
          </h2>
          <p className="text-center text-2xl font-bold mt-1">{result.isp}</p>
        </div>
      </div>
    </>
  );
}
