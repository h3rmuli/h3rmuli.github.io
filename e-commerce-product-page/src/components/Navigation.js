import { useMediaQuery } from '@react-hook/media-query';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default function Navigation() {
  const laptop = useMediaQuery('only screen and (min-width: 768px)');

  const entries = [
    ['Collections', 1],
    ['Men', 2],
    ['Women', 3],
    ['About', 4],
    ['Contact', 5],
  ];

  if (laptop) {
    return <DesktopNavigation entries={entries} />;
  } else {
    return <MobileNavigation entries={entries} />;
  }
}
