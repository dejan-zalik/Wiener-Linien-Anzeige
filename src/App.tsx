// import { skleraSDK } from '@sklera/sdk';

import { useEffect, useState } from 'react';
import './index.css';
import TramDisplay from './components/TramDisplay';

const sourceUrl = 'https://eogrkqip9l.execute-api.eu-west-1.amazonaws.com/';
const tramSelection = [3445, 3448];
const currentTime = new Date();

function App() {
  const [timesData, setTimesData] = useState<any>([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const fetchData = () => {
    setTimesData([]);

    tramSelection.forEach((id) => {
      fetch(`${sourceUrl}monitor?stopId=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setTimesData((prevData: any) => ({
            ...prevData,
            [`tramId${id}`]: data,
          }));
        })
        .catch((err) => console.log(err));
    });
  };

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
          <div style={{ textAlign: 'right', fontSize: '12px' }}>{time}</div>
          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>

          {Object.values(timesData).map((tram: any, index: number) => (
            <TramDisplay tram={tram} index={index} currentTime={currentTime} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
