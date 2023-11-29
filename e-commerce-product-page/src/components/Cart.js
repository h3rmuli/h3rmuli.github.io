export default function Cart() {
  return (
    <>
      <div className="bg-white rounded-lg sm:shadow-xl">
        <div className="font-bold p-5 border-b-2">Cart</div>
        <div className="flex flex-wrap p-5">
          <div className="w-full h-32 leading-[8] text-center">
            Your cart is empty.
          </div>
        </div>
      </div>
    </>
  );
}
