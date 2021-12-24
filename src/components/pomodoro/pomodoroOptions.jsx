
const PomodoroOptions = ({pomodoro,shortBreak, longBreak, pomodoroRef, date }) => {
  return (
    <div className="pomodoro__options">
      <ul>
        <li
          onClick={() => { pomodoro(); pomodoroRef.current?.pause() }}
          className={date.active === "pomodoro" ? "pomodoro__active" : ""}
        >
          Pomodoro
        </li>
        <li
          onClick={() => { shortBreak(); pomodoroRef.current?.pause() }}
          className={date.active === "shortBreak" ? "pomodoro__active" : ""}
        >
          Short Break
        </li>
        <li
          onClick={() => { longBreak(); pomodoroRef.current?.pause() }}
          className={date.active === "longBreak" ? "pomodoro__active" : ""}
        >
          Long Break
        </li>
      </ul>
    </div>
  );
};

export default PomodoroOptions;