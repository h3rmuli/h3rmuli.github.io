import Post from '../DisplayPost/Post';
import data from '../../../data.json';

export function DisplayPosts() {
  console.log('data', data);
  const posts = data.comments.map((post) => (
    <>
      <Post key={post.id} data={post} isPost></Post>
      {post.replies.length > 0 && (
        <div>
          {post.replies.map((reply) => (
            <>
              <div className="ml-5 md:ml-[3.6rem] pl-0 py-1 first:pt-0 last:pb-0 md:pl-14 border-l border-l-slate-300">
                <Post key={reply.id} data={reply}></Post>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  ));

  return <>{posts}</>;
}
