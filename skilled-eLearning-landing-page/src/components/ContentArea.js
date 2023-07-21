export default function ContentArea({ image, title, content }) {
  return (
    <div className="mx-3 mb-9 px-5 pb-5 bg-white rounded-lg">
      <img className="scale-75 relative -top-6 -left-2" src={image} />
      <h1 className="relative -top-5 font-bold">{title}</h1>
      <p className="relative -top-3 text-custom-gray">{content}</p>
      <a className="text-custom-pink" href="#">
        Get Started
      </a>
    </div>
  );
}
