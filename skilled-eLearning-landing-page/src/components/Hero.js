import heroPicMobile from '../assets/image-hero-mobile.png';
import heroPicTablet from '../assets/image-hero-tablet.png';

export default function Hero() {
  return (
    <div className="mt-8 px-3 md:mx-5 flex flex-wrap md:flex-nowrap md:mt-20">
      <div>
        <p className="text-4xl font-bold ">Maximize skill, minimize budget</p>
        <p className="mt-4 text-custom-gray">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="bg-gradient-to-t from-cgrpink to-cgrorange mt-3 px-6 py-2 text-white rounded-full">
          Get Started
        </button>
      </div>
      <div className="overflow-visible">
        <div className="visible md:hidden mt-4">
          <img src={heroPicMobile} alt="Picture of woman with a coffee cup" />
        </div>
        <div className="hidden md:contents">
          <img
            className="relative left-20 scale-200 overflow-hidden "
            src={heroPicTablet}
            alt="Picture of woman with a coffee cup"
          />
        </div>
      </div>
    </div>
  );
}
