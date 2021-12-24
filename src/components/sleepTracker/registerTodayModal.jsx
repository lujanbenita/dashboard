
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { HOURS_TIME } from '../../data/dataDailySleepTracker';

const RegisterTodayModal = ({
  open,
  sleepTime,
  workTime,
  handleChangeSleep,
  handleChangeWork,
  handleClose,
  handleRegisterTime,
}) => {
  return (
    <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
      <DialogTitle>Register to work and your sleep</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="demo-dialog-native">Work</InputLabel>
            <Select
              native
              value={workTime}
              onChange={handleChangeWork}
              input={<OutlinedInput label="Work" id="demo-dialog-native" />}
            >
              <option value={0}> 0 Hours</option> 
              {HOURS_TIME.map(itemValue => <option value={itemValue} key={itemValue}>{itemValue} {itemValue < 2 ? "Hour" : "Hours"}</option>)}  

            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="demo-dialog-native">Sleep</InputLabel>
            <Select
              native
              value={sleepTime}
              onChange={handleChangeSleep}
              input={<OutlinedInput label="Sleep" id="demo-dialog-native" />}
            >
              <option value={0}> 0 Hours</option> 
              {HOURS_TIME.map(itemValue => <option value={itemValue} key={itemValue}>{itemValue} {itemValue < 2 ? "Hour" : "Hours"}</option>)}  

            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleRegisterTime}>Register</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterTodayModal;