import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { vote } from '../commentsSlice';

export default function Vote({ postId, score }) {
  const data = useSelector((state) => state.posts).value;
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-row md:flex-col items-center">
        <div
          onClick={() => dispatch(vote({ id: postId, addition: true }))}
          className="group bg-cgrey h-11 w-10 px-3 md:px-[14px] py-4 rounded-l-lg md:rounded-t-lg md:rounded-bl-none  cursor-pointer"
        >
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
              className="group-hover:fill-cdblue"
            />
          </svg>
        </div>
        {/* <div className="bg-cgrey px-4 md:px-[8.4px] h-11 md:px-3 py-2.5 text-cmblue font-bold text-center cursor-not-allowed"> */}
        <div className="bg-cgrey  w-10 h-11 py-2.5 text-cmblue font-bold text-center cursor-not-allowed">
          {score}
        </div>
        <div
          className="group bg-cgrey h-11 w-10 px-3 md:px-[15px] py-5 rounded-r-lg md:rounded-b-lg md:rounded-tr-none cursor-pointer"
          onClick={() => dispatch(vote({ id: postId, addition: false }))}
        >
          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
              className="group-hover:fill-cdblue"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
