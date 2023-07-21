import heroPic from '../assets/image-hero-mobile.png';

export default function Hero() {
  return (
    <div className="mt-8 px-3">
      <p className="text-4xl font-bold ">Maximize skill, minimize budget</p>
      <p className="mt-4 text-custom-gray">
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </p>
      <button className="bg-gradient-to-t from-cgrpink to-cgrorange mt-3 px-6 py-2 text-white rounded-full">
        Get Started
      </button>
      <div className="sm:visible md:hidden mt-4">
        <img src={heroPic} alt="Picture of woman with a coffee cup" />
      </div>
    </div>
  );
}
