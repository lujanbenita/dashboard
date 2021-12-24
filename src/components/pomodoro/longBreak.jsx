import React from 'react';

const LongBreak = ({displayMessage, timeMin, timeSec}) => {
  return (
    <div className="pomodoro__time card">
      {displayMessage && <p> Break time!!!</p>}
      {timeMin}:{timeSec}
    </div>
  );
};

export default LongBreak;