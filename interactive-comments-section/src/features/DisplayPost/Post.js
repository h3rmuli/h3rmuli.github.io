import { createPortal } from 'react-dom';
import { useState, useRef } from 'react';
import Vote from './Vote';
import Modal from '../Modal/Modal';
import SendPost from '../SendPost/SendPost';
import { useDispatch } from 'react-redux';
import { update } from '../commentsSlice';

const Post = ({ data, isPost, currentUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editedPost, setEditedPost] = useState(data.content);

  const childRef = useRef(null);
  const dispatch = useDispatch();

  const owner = currentUser === data.user.username ? true : false;
  const portalContainer = document.getElementById(`reply-id-${data.id}`);

  const isPostCSS = 'relative my-5 mx-5 p-5 bg-white rounded-xl';
  const isReplyCSS = 'relative mt-4 mx-5 p-5 bg-white rounded-xl';

  const toggleShowReply = () => {
    setShowReply(!showReply);
  };

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const editHandler = () => {
    dispatch(update({ postId: data.id, content: editedPost }));
    setShowEdit(!showEdit);
  };
  console.log(data);

  return (
    <>
      <div className={isPost ? isPostCSS : isReplyCSS}>
        <div className="flex flex-col gap-y-2 md:grid md:grid-cols-12 md:grid-rows-2 md:gap-x-6 md:content-start">
          {/* {  VOTE} */}
          <div className="order-last md:order-first md:row-span-2 md:col-span-1">
            <Vote score={data.score} postId={data.id} />
          </div>
          {/* { USER } */}
          <div className="flex flex-row flex-wrap items-center md:items-start md:col-span-11">
            <img
              src={data.user.image.png}
              alt="User Avatar"
              width="16"
              height="16"
            />
            {/* <div className="h-8 w-8  bg-black rounded-full"></div> */}
            <div className="leading-8 ml-3">{data.user.username}</div>
            {owner && (
              <div className="leading-6 ml-3 px-2 max-h-6 bg-cmblue text-white">
                you
              </div>
            )}
            <div className="leading-8 ml-3">{data.createdAt}</div>
          </div>
          {/* { CONTENT } */}
          {!showEdit && (
            <div className="my-3 md:col-span-10 md:items-start md:-mt-6">
              {data.content}
            </div>
          )}
          {showEdit && (
            <div className="my-3 md:col-span-10 md:items-start md:-mt-14">
              <textarea
                placeholder="Edit the comment..."
                rows="3"
                id="postContent"
                name="postContent"
                value={editedPost}
                onChange={(e) => setEditedPost(e.target.value)}
                className="w-full resize-none rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-csred"
              />
              <div
                onClick={() => editHandler()}
                className="mt-4 md:mt-2 py-3 px-6 rounded-md bg-cmblue hover:bg-clgblue text-white float-right"
              >
                UPDATE
              </div>
            </div>
          )}
        </div>
        <div className="absolute h-10 flex flex-row gap-4 items-center bottom-6 right-5 md:top-4">
          {owner && (
            <>
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
                <span className="text-csred group-hover:text-[#ffcccf]">
                  Delete
                </span>
              </div>
              <div
                className="group flex flex-row items-center gap-2 cursor-pointer"
                onClick={() => toggleShowEdit()}
              >
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                    fill="#5357B6"
                    className="group-hover:fill-clgblue"
                  />
                </svg>
                <span className="group-hover:text-clgblue">Edit</span>
              </div>
            </>
          )}
          {showModal &&
            createPortal(
              <Modal postId={data.id} onClose={() => setShowModal(false)} />,
              document.body
            )}
          {isPost && !showReply && (
            <div
              className="group flex flex-row items-center gap-2 cursor-pointer"
              onClick={() => setShowReply(true)}
            >
              <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                  fill="#5357B6"
                  className="group-hover:fill-clgblue"
                />
              </svg>
              <span className="group-hover:text-clgblue">Reply</span>
            </div>
          )}
        </div>
      </div>
      {showReply && (
        <>
          <div className="mt-5" id={`reply-id-${data.id}`}></div>
          <SendPost
            ref={childRef}
            isReply
            data={data}
            onClose={toggleShowReply}
          />
        </>
      )}
    </>
  );
};

export default Post;
