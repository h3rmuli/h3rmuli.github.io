const OrderSummary = () => {
  return (
    <div className="bg-white rounded-b-lg">
      <h1 className="text-lg font-RedHatDisplay pt-5 text-center text-dark-blue">
        Order Summary
      </h1>
      <p className="font-RedHatDisplay pt-5 text-center text-desaturated-blue">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="flex flex-row bg-very-pale-blue mx-4 p-3 rounded-lg my-5">
        <div className="basis-1/4 bg-music-icon bg-no-repeat"></div>
        <div className="basis-1/2">
          <div className="font-bold">Annual Plan</div>
          <div className="text-desaturated-blue font-light -my-1">
            $59.99/year
          </div>
        </div>
        <div className="basis-1/4 py-3">
          <a href="#" className="underline text-blue-800">
            Change
          </a>
        </div>
      </div>
      <div className="bg-bright-blue text-white p-3 mx-4 mt-5 text-center rounded-lg  shadow-lg shadow-desaturated-blue">
        Proceed to Payment
      </div>
      <div className="text-center mt-3 pb-5 font-bold text-desaturated-blue">
        Cancel Order
      </div>
    </div>
  );
};

export default OrderSummary;
