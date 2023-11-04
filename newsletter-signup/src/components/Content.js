import Subscribe from './Subscribe';

export default function Content() {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-3xl font-bold">Stay updated!</h1>
        <p className="mt-5">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="flex my-5">
          <svg
            className="flex-none w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
          >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p className="grow ml-3">
            Product discovery and building what matters
          </p>
        </div>
        <div className="flex my-5">
          <svg
            className="flex-none w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
          >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p className="grow ml-3">Measuring to ensure updates are a success</p>
        </div>
        <div className="flex my-5">
          <svg
            className="flex-none w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
          >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p className="grow ml-3">And much more!</p>
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
