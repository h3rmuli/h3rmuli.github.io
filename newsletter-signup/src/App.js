import Hero from './components/Hero';
import Content from './components/Content';
import ThankYou from './components/ThankYou';
import { useSelector } from 'react-redux';

const App = () => {
  const content = useSelector((state) => state.components.value.content);
  const thanks = useSelector((state) => state.components.value.thankYou);
  console.log(content);
  return (
    <div className="h-screen flex items-center lg:w-8/12 xl:w-6/12 mx-auto bg-charcoal">
      {content === true ? (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:h-2/3 md:items-center bg-white rounded-xl">
          <>
            <div className="order-first md:order-last">
              <Hero />
            </div>
            <Content />
          </>
        </div>
      ) : null}
      {thanks === true ? <ThankYou /> : null}
    </div>
  );
};

export default App;
