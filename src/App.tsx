// import { skleraSDK } from '@sklera/sdk';

import { useEffect, useState } from 'react';
import './index.css';
import TramDisplay from './components/TramDisplay';
import { getTramData, TramStopData } from './utils/monitorApi';
import CurrentTime from './components/CurrentTime';

const tramStopIds = [3445, 3448];

const App = () => {
  const [tramStopData, setTramStopData] = useState<TramStopData>([]);

  const fetchData = async () => {
    try {
      const data = await getTramData(tramStopIds);
      setTramStopData(data);
    } catch (error) {
      window.alert(`something went wrong`);
    }
  };

  console.log(Object.values(tramStopData));

  useEffect(() => {
    fetchData();

    // const fetchInterval = setInterval(() => {
    //   fetchData();
    // }, 10000);

    // const timeInterval = setInterval(() => {
    //   setTime(new Date().toLocaleTimeString());
    // }, 1000);

    // return () => {
    //   clearInterval(fetchInterval);
    //   clearInterval(timeInterval);
    // };
  }, []);

  // useEffect(() => {
  //   skleraSDK.loaded().then(console.log).catch(console.error);
  // }, []);

  return (
    <>
      <main className="app-container">
        <div>
          <CurrentTime />
          {Object.entries(tramStopData).map(([stopId, tram]) => (
            <TramDisplay key={stopId} tram={tram} />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
