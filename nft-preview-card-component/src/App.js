import equilibrium from './images/image-equilibrium.jpg';
import avatar from './images/image-avatar.png';

const App = () => {
  return (
    <>
      <div className="bg-mainBG lg:min-h-screen">
        <div className="p-5 lg:w-1/4 lg:mx-auto">
          <div className="p-5 bg-cardBG rounded-lg">
            <img
              src={equilibrium}
              alt="Picture of Equilibrium"
              className="rounded-lg"
            />
            <h1 className="text-white font-bold mt-4 font-Outfit">
              Equilibrium #3429
            </h1>
            <p className="mt-4 text-soft-blue">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="mt-4 pb-4  flex flex-row justify-between content-center border-b border-line">
              <p className="text-Cyan">
                <svg
                  className="inline mr-1 scale-90 mb-1"
                  width="11"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#00FFF8"
                  />
                </svg>
                0.041 ETH
              </p>
              <p className="text-soft-blue">
                <svg
                  className="inline mr-1 scale-90 mb-1"
                  width="17"
                  height="17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                    fill="#8BACD9"
                  />
                </svg>
                3 days left
              </p>
            </div>
            <div className="flex flex-row mt-4 overflow-hidden">
              <img
                src={avatar}
                alt="Avatar"
                className="scale-25 origin-top-left border-2 border-white rounded-full"
              />
              <p className="text-soft-blue -ml-24 mt-1">Creation of&nbsp;</p>
              <p className="text-white mt-1">Jules Wyvern</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
