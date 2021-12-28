
import { useForm } from "react-hook-form";

import LayoutDashboard from "../layout/layoutDashboard";
import MainProfile from "../components/profile/mainProfile";
import CardIntroduction from "../components/profile/cardIntroduction";
import CardPhotos from "../components/profile/cardPhotos";
import CardProjects from "../components/profile/cardProjects";
import ModalProfile from "../components/profile/modalProfile";
import ModalUser from "../components/profile/modalUser";
import UseProfile from "../hooks/useProfile";

const Profile = () => {

  const { register: registerProfile, handleSubmit: handleSubmitProfile} = useForm();
  const { register: registerUser, handleSubmit: handleSubmitUser} = useForm();

  const {
    profile,
    open: openProfile,
    handleOpen: handleOpenProfile,
    handleClose: handleCloseProfile,
    onSubmit: onSubmitProfile
  } = UseProfile()

  const {
    open: openUser,
    handleOpen: handleOpenUser,
    handleClose: handleCloseUser,
    onSubmit: onSubmitUser
  } = UseProfile()

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
