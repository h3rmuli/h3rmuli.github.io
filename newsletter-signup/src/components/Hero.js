import { useMediaQuery } from '@react-hook/media-query';
import Hero_Mobile from './Hero_Mobile';
import Hero_Laptop from './Hero_Laptop';

export default function Hero() {
  const laptop = useMediaQuery('only screen and (min-width: 768px)');
  if (laptop) {
    return <Hero_Laptop />;
  } else {
    return <Hero_Mobile />;
  }
}
