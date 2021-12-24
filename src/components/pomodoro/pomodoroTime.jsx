import Countdown from 'react-countdown';
import UsePomodoro from '../../hooks/usePomodoro';

const PomodoroTime = ({ref }) => {
  
  
  
  return (
    <Countdown
      date={Date.now() + 500000}
      renderer={countDownRender}
      autoStart={false}
      ref={ref}
    />
  );
};

export default PomodoroTime;