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
        <div className="flex flex-row flex-wrap items-center">
          <div className="h-8 w-8  bg-black rounded-full"></div>
          <div className="leading-8 ml-3">{data.user.username}</div>
          <div className="leading-6 ml-3 px-2 max-h-6 bg-cmblue text-white">
            you
          </div>
          <div className="leading-8 ml-3">{data.createdAt}</div>
          <div className="my-3 ">{data.content}</div>
        </div>
      </div>
      <div className="absolute h-10 flex flex-row gap-4 items-center bottom-6 right-5 md:top-4">
        <div className="flex flex-row items-center gap-2">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
              fill="#ED6368"
            />
          </svg>
          <span className="text-csred">Delete</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          <span className="">Reply</span>
        </div>
      </div>
    </div>
  );
}
