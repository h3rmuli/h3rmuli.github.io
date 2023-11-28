import Lightbox from './components/Lightbox';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex gap-x-10 justify-center my-16 flex-wrap">
        <div className="w-full sm:w-1/3">
          <Lightbox />
        </div>
        <div className="w-1/3">another div</div>
      </div>
    </>
  );
};

export default App;
