import { deletePost } from '../commentsSlice';
import { useDispatch } from 'react-redux';

export default function Modal({ onClose, postId }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deletePost(postId));
  };

  return (
    <>
      <div className="grid place-items-center h-screen w-screen bg-slate-300/50 fixed top-0">
        <div className="w-11/12 md:w-96  p-5 bg-white rounded-lg">
          <h1 className="font-bold">Delete Comment</h1>
          <p className="my-3">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone
          </p>
          <div className="mt-3 flex flex-row justify-between">
            <div
              className="px-4 py-2 rounded-lg bg-slate-500 text-white uppercase cursor-pointer"
              onClick={onClose}
            >
              No, cancel
            </div>
            <div
              className="px-4 py-2 rounded-lg bg-csred text-white uppercase cursor-pointer"
              onClick={deleteHandler}
            >
              Yes, delete
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
