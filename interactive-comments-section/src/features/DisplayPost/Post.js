import { createPortal } from 'react-dom';
import { useState } from 'react';
import Vote from './Vote';
import Modal from '../Modal/Modal';

export default function Post({ data, isPost }) {
  const [showModal, setShowModal] = useState(false);

  const isPostCSS = 'relative my-5 mx-5 p-5 bg-white';
  const isReplyCSS = 'relative mt-4 mx-5 p-5 bg-white';

  return (
    <div className={isPost ? isPostCSS : isReplyCSS}>
      <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-6">
        <div className="order-last md:order-first">
          <Vote score={data.score} postId={data.id} />
        </div>
        {/* <img src={pic.png} alt="User Avatar" width="16" height="16" /> */}
        <div className="flex flex-row flex-wrap items-center">
          <div className="h-8 w-8  bg-black rounded-full"></div>
          <div className="leading-8 ml-3">{data.user.username}</div>
          <div className="leading-6 ml-3 px-2 max-h-6 bg-cmblue text-white">
            you
          </div>
          <div className="leading-8 ml-3">{data.createdAt}</div>
        </div>
        <div className="my-3 ">{data.content}</div>
      </div>
      <div className="absolute h-10 flex flex-row gap-4 items-center bottom-6 right-5 md:top-4">
        <div
          className="group flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
              fill="#ED6368"
              className="group-hover:fill-[#ffcccf]"
            />
          </svg>
          <span className="text-csred group-hover:text-[#ffcccf]">Delete</span>
        </div>
        {showModal &&
          createPortal(
            <Modal onClose={() => setShowModal(false)} />,
            document.body
          )}
        <div className="group flex flex-row items-center gap-2 cursor-pointer">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
              className="group-hover:fill-clgblue"
            />
          </svg>
          <span className="group-hover:text-clgblue">Reply</span>
        </div>
      </div>
    </div>
  );
}
