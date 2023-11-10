import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addPost } from '../commentsSlice';
import { useState } from 'react';
import { UseSelector } from 'react-redux';

export default function SendPost() {
  const [postContent, setPostContent] = useState('');
  const currentUser = useSelector((state) => state.posts).value.currentUser;
  const dispatch = useDispatch();

  const onContentChange = (e) => setPostContent(e.target.value);

  const addPostHandler = () => {
    dispatch(
      addPost({
        id: nanoid(),
        content: postContent,
        createdAt: '2 months ago',
        score: 0,
        user: {
          username: currentUser.username,
          image: {
            png: currentUser.image.png,
            webp: currentUser.image.webp,
          },
        },
        replies: [],
      })
    );
    setPostContent('');
  };

  return (
    <>
      <div className="m-5 p-5 bg-white  flex-row flex flex-wrap gap-x-5 justify-between items-center md:items-start">
        <div className="mt-4 md:mt-0 h-8 w-8  bg-black rounded-full"></div>
        <div className="-order-1 basis-full md:order-none md:basis-auto md:grow">
          <textarea
            placeholder="Add a comment..."
            rows="3"
            id="postContent"
            name="postContent"
            value={postContent}
            onChange={onContentChange}
            className="w-full resize-none rounded-md px-4 py-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-csred"
          />
        </div>
        <div
          className="mt-4 md:mt-0 py-3 px-6 rounded-md bg-cmblue hover:bg-clgblue text-white"
          onClick={() => addPostHandler()}
        >
          SEND
        </div>
      </div>
    </>
  );
}
