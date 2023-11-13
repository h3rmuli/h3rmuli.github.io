import Post from '../DisplayPost/Post';
import { useSelector } from 'react-redux';

// for sorting purposes to create a deep copy instead of a shallow copy
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function DisplayPosts() {
  const data = useSelector((state) => state.posts).value;
  const currentUser = data.currentUser.username;

  const sortedComments = deepCopy(data.comments);
  sortedComments.sort((a, b) => b.score - a.score);

  for (let i = 0; i < sortedComments.length; i++) {
    if (
      sortedComments[i].replies != null &&
      sortedComments[i].replies.length > 0
    ) {
      sortedComments[i].replies = sortedComments[i].replies
        .slice()
        .sort((a, b) => b.score - a.score);
    }
  }

  return (
    <div>
      <ul>
        {sortedComments.map((post) => (
          <li key={post.id}>
            <Post
              key={post.id}
              data={post}
              isPost
              currentUser={currentUser}
            ></Post>
            {post.replies.length > 0 && (
              <div>
                <ul>
                  {post.replies.map((reply) => (
                    <li key={reply.id}>
                      <div className="ml-5 md:ml-[3.6rem] pl-0 py-1 first:pt-0 last:pb-0 md:pl-14 border-l border-l-slate-300">
                        <Post
                          key={reply.id}
                          data={reply}
                          currentUser={currentUser}
                        ></Post>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
