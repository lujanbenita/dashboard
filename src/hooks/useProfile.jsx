import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/user/userAction';

const UseProfile = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data, e) => {
    e.preventDefault()
    const updateData = { ...profile, ...data }
    dispatch(updateProfile(updateData))
    setOpen(false)
  } 

  return {
    open,
    profile,
    handleOpen,
    handleClose,
    onSubmit
  }
};

export default UseProfile;