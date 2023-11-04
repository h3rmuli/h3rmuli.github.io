import { useDispatch, useSelector } from 'react-redux';
import { set } from './emailSlice';
import { cmpShow, cmpHide } from './componentsSlice';
import { UseSelector } from 'react-redux';

export default function thankYou() {
  const emailAdress = useSelector((state) => state.email.value);
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(set(''));
    dispatch(cmpHide('thankYou'));
    dispatch(cmpShow('content'));
  };
  return (
    <div>
      <div className="h-screen md:h-1/3 w-full md:w-1/2 py-6 px-10 md:items-center bg-white rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className="mb-5"
        >
          <defs>
            <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#FF6A3A" />
              <stop offset="100%" stop-color="#FF527B" />
            </linearGradient>
          </defs>
          <g fill="none">
            <circle cx="32" cy="32" r="32" fill="url(#a)" />
            <path
              stroke="#FFF"
              stroke-width="4"
              d="m18.286 34.686 8.334 7.98 19.094-18.285"
            />
          </g>
        </svg>
        <h1 className="text-3xl font-bold mb-3">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{' '}
          <span className="font-semibold">{emailAdress}</span>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <div
          className="bg-slate-600 hover:bg-Tomato hover:drop-shadow-2xl p-3 h-12 mt-5 rounded-md text-white text-center"
          onClick={() => handler()}
        >
          Dismiss message
        </div>
      </div>
    </div>
  );
}
