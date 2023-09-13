export default function Point({ value, handler }) {
  return (
    <div className="bg-slate-500 rounded-full flex items-center justify-center w-12 h-12 text-neutral-300">
      <div data-testing={value} onClick={handler} className="inline">
        {value}
      </div>
    </div>
  );
}
