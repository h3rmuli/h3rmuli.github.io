import Vote from './Vote';
import testData from '../../../data.json';

export default function Post() {
  const data = testData.comments[0];
  console.log(data);

  return (
    <div className="relative m-5 p-5 bg-white">
      <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-6">
        <div className="order-last md:order-first">
          <Vote />
        </div>
        {/* <img src={pic.png} alt="User Avatar" width="16" height="16" /> */}
        <div className="flex flex-row flex-wrap">
          <div className="h-8 w-8  bg-black rounded-full"></div>
          <div className="leading-8 ml-3">{data.user.username}</div>
          <div className="leading-8 ml-3">{data.createdAt}</div>
          <div className="my-3 ">{data.content}</div>
        </div>
      </div>
      <div className="absolute bottom-5 right-5 md:top-5">Reply</div>
    </div>
  );
}
