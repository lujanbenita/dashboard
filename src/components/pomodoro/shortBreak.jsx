
const ShortBreak = ({displayMessage, timeMin, timeSec}) => {
  return (
    <div className="pomodoro__time card">
      {displayMessage && <p> Break time!!!</p>}
      {timeMin}:{timeSec}
    </div>
  );
};

export default ShortBreak;