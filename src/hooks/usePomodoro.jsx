import { useRef, useState } from 'react';

const UsePomodoro = () => {

  const [start, setStart] = useState(false)
  const [key, setKey] = useState(0);
  const [date, setDate] = useState({
    ms: Date.now() + 10000,
    sec: 10,
    active: "Demo",
    background: ""
})

  const pomodoro = () => {
    setKey(prevKey => prevKey + 1)
    setDate({
      ms: Date.now() + 1500000,
      sec: 1500,
      active: "pomodoro",
      className: "pomodoro__pomodoro"
    })
  }

  const shortBreak = () => {
    setKey(prevKey => prevKey + 1)
    setDate({
      ms: Date.now() + 300000,
      sec: 300,
      active: "shortBreak",
      className: "pomodoro__short"
    })
  }

  const longBreak = () => {
    setKey(prevKey => prevKey + 1)
    setDate({
      ms: Date.now() + 900000,
      sec: 900,
      active: "longBreak",
      className: "pomodoro__long"
    })
  }

  const pomodoroRef = useRef();
  
  const handleStart = (e) => {
    if (pomodoroRef?.current.isPaused() || pomodoroRef?.current.state.status === "STOPPED") 
      return pomodoroRef.current?.start();
    else 
      return pomodoroRef.current?.pause();
  }

  const countDownRender = ({ minutes, seconds, completed }) => {

    if(minutes < 10) {
      minutes = `0${minutes}`
    }
    if(seconds < 10) {
      seconds = `0${seconds}`
    }
    if (completed) {
      // Render a completed state
      return `${date.active} Complete` ;
    } else {
      // Render a countdown
      return <span className='pomodoro__render'>{minutes}:{seconds}</span>;
    }
  };

  return {
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
  }
};

export default UsePomodoro;