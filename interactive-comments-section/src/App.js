import SendPost from './features/SendPost/SendPost';
import { DisplayPosts } from './features/DisplayPosts/DisplayPosts';

const App = () => {
  return (
    <>
      <DisplayPosts />
      <SendPost />
    </>
  );
};

export default App;
