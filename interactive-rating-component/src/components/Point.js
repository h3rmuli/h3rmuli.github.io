export default function Point({ value, handler, active }) {
  let css =
    active == value
      ? 'bg-slate-400 rounded-full flex items-center justify-center w-12 h-12 text-white hover:bg-orange-400 hover:text-white transition duration-300'
      : 'bg-slate-700 rounded-full flex items-center justify-center w-12 h-12 text-neutral-300 hover:bg-orange-400 hover:text-white transition duration-300';

  return (
    <div data-testing={value} onClick={handler} className={css}>
      <div className="inline">{value}</div>
    </div>
  );
}
