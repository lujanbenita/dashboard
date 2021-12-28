import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import LayoutDashboard from "../layout/layoutDashboard";
import { updateProfile } from "../redux/user/userAction";
import MainProfile from "../components/profile/mainProfile";
import CardIntroduction from "../components/profile/cardIntroduction";
import CardPhotos from "../components/profile/cardPhotos";
import CardProjects from "../components/profile/cardProjects";
import ModalProfile from "../components/profile/modalProfile";
import ModalUser from "../components/profile/modalUser";


const Profile = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  const [openUser, setOpenUser] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const { register: registerProfile, handleSubmit: handleSubmitProfile} = useForm();
  const { register: registerUser, handleSubmit: handleSubmitUser} = useForm();

  const handleOpenUser = () => setOpenUser(true);
  const handleCloseUser = () => setOpenUser(false);

  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);

  const onSubmitProfile = (data, e) => {
    e.preventDefault()
    dispatch(updateProfile(data))
    setOpenProfile(false)
  } 

  const onSubmitUser = (data, e) => {
    e.preventDefault()
    const updateData = { ...profile, ...data }
    dispatch(updateProfile(updateData))
    setOpenUser(false)
  } 
  
  return (
    <LayoutDashboard className="flex" title={"PROFILE"}>

      <MainProfile
        profile={profile}
        handleOpenUser={handleOpenUser}
      />

      <CardIntroduction
        profile={profile}
        handleOpenProfile={handleOpenProfile}
      />

      <CardPhotos />

      <CardProjects />

      <ModalProfile
        profile={profile}
        openProfile={openProfile}
        handleCloseProfile={handleCloseProfile}
        handleSubmitProfile={handleSubmitProfile}
        registerProfile={registerProfile}
        onSubmitProfile ={onSubmitProfile }
      />

      <ModalUser
        profile={profile}
        openUser={openUser}
        handleCloseUser={handleCloseUser}
        handleSubmitUser={handleSubmitUser}
        registerUser={registerUser}
        onSubmitUser ={onSubmitUser }
      />

    </LayoutDashboard>
  );
};

export default Profile;
