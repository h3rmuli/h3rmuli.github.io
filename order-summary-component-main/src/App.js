import Hero from './components/Hero';
import OrderSummary from './components/OrderSummary';

const App = () => {
  console.log('Hello from komponentti');
  return (
    <div className="bg-pale-blue">
      <div className="p-4">
        <Hero />
        <OrderSummary />
      </div>
    </div>
  );
};

export default App;
