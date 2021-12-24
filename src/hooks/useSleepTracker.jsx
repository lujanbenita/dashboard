import { useState } from 'react';

const UseSleepTracker = () => {

  const [open, setOpen] = useState(false);
  const [sleepTime, setSleepTime] = useState(0);
  const [workTime, setWorkTime] = useState(0);
  const [registerTime, setRegisterTime] = useState(null)

  const handleChangeSleep = (event) => {
    setSleepTime(Number(event.target.value) || '0');
  };

  const handleChangeWork = (event) => {
    setWorkTime(Number(event.target.value) || '0');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleRegisterTime = (event, reason) => {
    setRegisterTime([
      {
        name: "Sleeping",
        data: sleepTime
      },
      {
        name: "Working",
        data: workTime
      },
     {
        name: "Freetime",
        data: 24 - workTime - sleepTime
      },]
    )
    if (reason !== 'backdropClick') setOpen(false);
  };

  return {
    open,
    sleepTime,
    workTime,
    registerTime,
    handleChangeSleep,
    handleChangeWork,
    handleClickOpen,
    handleClose,
    handleRegisterTime
  }
};

export default UseSleepTracker;