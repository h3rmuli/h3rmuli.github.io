import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from './emailSlice';
import { cmpShow, cmpHide } from './componentsSlice';

export default function Subscribe() {
  const [emailInput, setEmailInput] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  console.log('emailInput: ', emailInput);
  const dispatch = useDispatch();

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validInputCSS =
    'block w-full rounded-md mt-2 py-3 pl-3 h-12 border-0 ring-1 ring-black';
  const invalidInputCSS =
    'block w-full rounded-md mt-2 py-3 pl-3 h-12 border-0 ring-1 ring-red-500 bg-red-100';

  const handler = () => {
    if (emailIsValid(emailInput)) {
      dispatch(set(emailInput));
      dispatch(cmpHide('content'));
      dispatch(cmpShow('thankYou'));
    } else {
      setEmailValid(false);
    }
  };

  return (
    <div className="px-5">
      <label htmlFor="emailAddress">Email address</label>
      {!emailValid ? (
        <>
          <label htmlFor="emailAddress" className="float-right text-red-500">
            Valid email required
          </label>
        </>
      ) : null}
      <input
        type="text"
        id="emailAddress"
        className={emailValid ? validInputCSS : invalidInputCSS}
        placeholder="email@company.com"
        onChange={(e) => {
          setEmailInput(e.target.value);
          setEmailValid(true);
        }}
      ></input>
      <div
        className="bg-slate-600 hover:bg-Tomato hover:drop-shadow-2xl p-3 h-12 mt-5 rounded-md text-white text-center"
        onClick={() => handler()}
      >
        Subscribe to monthly newsletter
      </div>
    </div>
  );
}
