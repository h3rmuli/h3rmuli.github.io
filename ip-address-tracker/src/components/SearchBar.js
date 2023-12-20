import { useState } from 'react';

export default function SearchBar() {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const searchHandler = () => {
    console.log('clickk');
  };

  const handleClick = () => {
    console.log('asdasd');
    setIsLoading(true);
    try {
      fetch('https://catfact.ninja/fact')
        // fetch('https://www.boredapi.com/api/activity')
        .then((res) => {
          if (!res.ok) throw new Error(`Error! status: ${res.status}`);
          return res;
        })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log('json', json);
          setData(json);
        })
        .catch((err) => {
          console.log('catch', err);
          setErr(err);
        })
        .finally(() => {
          console.log('finally');
          setIsLoading(false);
        });
    } catch (error) {
      setErr(error);
      console.log('error', error);
    }
  };

  return (
    <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
      <div className="flex flex-row flex-nowrap">
        <input
          className="basis-5/6 p-3 rounded-l-lg cursor-pointer"
          name="search"
          placeholder="Search for any IP address or domain"
        />
        <div
          onClick={() => handleClick()}
          className="basis-1/6 text-white bg-black hover:bg-slate-800 leading-7 py-2 px-4 text-2xl rounded-r-lg float-right text-center"
        >
          &#62;
        </div>
      </div>
    </div>
  );
}
