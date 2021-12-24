
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from 'react-countdown';

import UsePomodoro from '../hooks/usePomodoro';
import LayoutDashboard from '../layout/layoutDashboard';
import PomodoroOptions from '../components/pomodoro/pomodoroOptions';

const Pomodoro = () => {

  const {
    start,
    date,
    key,
    pomodoroRef,
    handleStart,
    setStart,
    pomodoro,
    shortBreak,
    longBreak,
    countDownRender
  } = UsePomodoro()
  

  return (
    <LayoutDashboard className={date.className}  title={"POMODORO"}>

      <PomodoroOptions
        date={date}
        pomodoro={pomodoro}
        shortBreak={shortBreak}
        longBreak={longBreak}
        pomodoroRef={pomodoroRef}
      />

      <div className='pomodoro__timer'>

        <CountdownCircleTimer
          key={key}
          isPlaying={start}
          size={250}
          duration={date.sec}
          initialRemainingTime={date.sec}
          colors={[
            ['#08C989', 0.33],
            ['#E5CC5E', 0.33],
            ['#E57388', 0.33],
          ]}
        >
          <Countdown
            date={date.ms}
            renderer={countDownRender}
            autoStart={false}
            ref={pomodoroRef}
          />
        </CountdownCircleTimer>
      
      </div>

      <div className="pomodoro__start" onClick={() => {
        handleStart()
        setStart(!start)
      }}>
        {start ? "Pause" : "Start"}
      </div>

    </LayoutDashboard>
  );
};

export default Pomodoro;