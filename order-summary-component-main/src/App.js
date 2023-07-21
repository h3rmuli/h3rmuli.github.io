import Hero from './components/Hero';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <div className="bg-pale-blue lg:bg-pattern-desktop lg:bg-repeat-x lg:min-h-screen">
      <div className="p-4 lg:p-10 lg:max-w-md lg:mx-auto">
        <Hero />
        <OrderSummary />
      </div>
    </div>
  );
};

export default App;
