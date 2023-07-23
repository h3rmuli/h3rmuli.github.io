import heroPicMobile from '../assets/image-hero-mobile.png';
import heroPicTablet from '../assets/image-hero-tablet.png';
import heroPicDesktop from '../assets/image-hero-desktop.png';

export default function Hero() {
  return (
    <div className="mt-8 px-3 md:mx-5 md:mt-20 lg:mx-24 flex flex-wrap md:flex-nowrap">
      <div>
        <p className="text-4xl font-bold lg:mt-36">
          Maximize skill, minimize budget
        </p>
        <p className="mt-4 text-custom-gray">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="bg-gradient-to-t from-cgrpink to-cgrorange hover:bg-gradient-to-t hover:to-cgrpink hover:from-cgrorange mt-3 lg:mt-6 px-6 py-2 text-white rounded-full">
          Get Started
        </button>
      </div>
      <div className="overflow-visible">
        <div className="visible md:hidden mt-4">
          <img src={heroPicMobile} alt="Picture of woman with a coffee cup" />
        </div>
        <div className="hidden md:contents lg:hidden">
          <img
            className="relative left-20 scale-100 overflow-hidden "
            src={heroPicTablet}
            alt="Picture of woman with a coffee cup"
          />
        </div>
        <div className="hidden lg:contents">
          <img
            className="relative left-52 -top-20 scale-150 overflow-hidden "
            src={heroPicDesktop}
            alt="Picture of woman with a coffee cup"
          />
        </div>
      </div>
    </div>
  );
}
