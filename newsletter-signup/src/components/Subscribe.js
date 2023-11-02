import { useState } from 'react';

export default function Subscribe() {
  const [emailInput, setEmailInput] = useState('');

  return (
    <div className="px-5">
      <label htmlFor="emailAddress">Email address</label>
      <input
        type="text"
        id="emailAddress"
        className="block w-full rounded-md mt-2 py-3 pl-3 h-12 border-0 ring-1 ring-black"
        placeholder="email@company.com"
      ></input>
      <div className="bg-slate-600 hover:bg-Tomato p-3 h-12 mt-5 rounded-md text-white text-center">
        Subscribe to monthly newsletter
      </div>
    </div>
  );
}
