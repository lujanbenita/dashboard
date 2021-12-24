import { useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../redux/user/userAction';

const Themes = () => {
  const themeSelected = useSelector(state => state.user.theme)
  const dispatch = useDispatch()

  const [themeChoice, setThemeChoice] = useState(themeSelected);

  const handleChange = (event, themeChoice) => {
    if (themeChoice !== null) { 
      setThemeChoice(themeChoice);
      dispatch(theme(themeChoice))
    }
  };

  return (
    <div className='custom'>
      <ToggleButtonGroup
        color="primary"
       // orientation="vertical"
        value={themeChoice}
        exclusive
        onChange={handleChange}
        >
        <ToggleButton value="theme__blue">Blue</ToggleButton>
        <ToggleButton value="theme__red">Red</ToggleButton>
        <ToggleButton value="theme__dark">Dark</ToggleButton>
        <ToggleButton value="theme__green">Green</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Themes;