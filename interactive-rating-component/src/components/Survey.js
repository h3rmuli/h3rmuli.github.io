export default function Survey() {
  return (
    <div className="bg-slate-800 m-5 p-5 rounded-lg">
      <div className="bg-slate-600 rounded-full flex items-center justify-center w-12 h-12">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <h1 className="text-2xl font-semibold mt-5 text-white">How did we do?</h1>
      <p className="mt-3 text-neutral-400">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mt-6">
        <div className="bg-slate-500 rounded-full flex items-center justify-center w-12 h-12 text-neutral-300">
          <div className="inline">1</div>
        </div>
        <div className="bg-slate-500 rounded-full p-4 flex items-center justify-center w-12 h-12 text-neutral-300">
          <div className="inline">2</div>
        </div>
        <div className="bg-slate-500 rounded-full p-4 flex items-center justify-center w-12 h-12 text-neutral-300">
          <div className="inline">3</div>
        </div>
        <div className="bg-slate-500 rounded-full p-4 flex items-center justify-center w-12 h-12 text-neutral-300">
          <div className="inline">4</div>
        </div>
        <div className="bg-slate-500 rounded-full p-4 flex items-center justify-center w-12 h-12 text-neutral-300">
          <div className="inline">5</div>
        </div>
      </div>
      <button className="block bg-orange-400 mt-5 py-2 w-full rounded-lg text-white">
        Submit
      </button>
    </div>
  );
}
