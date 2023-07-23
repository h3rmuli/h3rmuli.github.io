import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-[#F0F1FF] overflow-hidden">
        <NavBar />
        <Hero />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default App;
