import MapDisplay from './components/MapDisplay';
import { useMediaQuery } from '@react-hook/media-query';
import { lazy, Suspense, useState } from 'react';
import SearchBar from './components/SearchBar.js';
import Result from './components/Result.js';

const mockResult = {
  ipaddress: '192.168.0.1',
  location: 'Brooklyn, NY 100012',
  timezone: 'UTC 0500',
  isp: 'SpaceX Starlink',
};

const DesktopBackground = lazy(() =>
  import('./components/BackgroundCmps/DesktopBackground.js')
);

const MobileBackground = lazy(() =>
  import('./components/BackgroundCmps/MobileBackground.js')
);

const App = () => {
  const laptop = useMediaQuery('only screen and (min-width: 768px)');

  return (
    <>
      <div className="flex flex-wrap h-screen">
        <div className="w-full h-1/3 relative justify-center">
          {laptop ? (
            <Suspense fallback="asdas">
              <DesktopBackground />
            </Suspense>
          ) : (
            <Suspense fallback="asdas">
              <MobileBackground />
            </Suspense>
          )}
        </div>
        <div className="h-2/3 w-full">
          <MapDisplay />
        </div>
      </div>
      <div className="fixed h-screen w-screen top-0 flex flex-col items-center z-50">
        <h1 className="my-6 text-white text-xl">IP Address Tracker</h1>
        <SearchBar />
        <Result result={mockResult} />
      </div>
    </>
  );
};

export default App;
