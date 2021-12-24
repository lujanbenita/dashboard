
import Button from '@mui/material/Button';

import LayoutDashboard from '../layout/layoutDashboard';
import ChartRealTime from '../components/sleepTracker/chartRealTime';

import { StyledEngineProvider } from '@mui/material/styles';
import RegisterTodayModal from '../components/sleepTracker/registerTodayModal';
import UseSleepTracker from '../hooks/useSleepTracker';


const SleepTracker = () => {

  const {
    open,
    sleepTime,
    workTime,
    registerTime,
    handleChangeSleep,
    handleChangeWork,
    handleClickOpen,
    handleClose,
    handleRegisterTime
  } = UseSleepTracker()

  return (
    <StyledEngineProvider injectFirst>
      <LayoutDashboard title={"Daily sleep tracker"} className='sleep-tracker'>

        <ChartRealTime registerDate={registerTime} />
        
        {registerTime === null &&
          <Button onClick={handleClickOpen} className='btn-modal'>Register today</Button>
        }

        <RegisterTodayModal
          sleepTime={sleepTime}
          workTime={workTime}
          open={open}
          handleChangeSleep={handleChangeSleep}
          handleChangeWork={handleChangeWork}
          handleClose={handleClose}
          handleRegisterTime={handleRegisterTime}
        />
      </LayoutDashboard >
    </StyledEngineProvider>
  );
};

export default SleepTracker;
