import { useEffect, useState } from 'react';

const CurrentTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return <div style={{ textAlign: 'right', fontSize: '12px' }}>{time}</div>;
};

export default CurrentTime;
