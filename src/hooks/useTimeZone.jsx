import { useEffect, useState } from "react";

const UseTimeZone = (utc = 0) => {
  const newDate = new Date()
  newDate.setHours(newDate.getHours() + utc)
  const [currentDate, setCurrentDate] = useState(newDate);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const myDate = new Date();
      myDate.setHours(myDate.getHours() + utc);
      setCurrentDate(myDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [utc]);

  return {
    currentDate
  }
};

export default UseTimeZone;