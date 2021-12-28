import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TitleCard from '../common/titleCard';
import CountriesList from '../forms/countriesList';

const ModalProfile = ({
  profile,
  openProfile,
  registerProfile,
  onSubmitProfile,
  handleCloseProfile,
  handleSubmitProfile,
}) => {

  return (
    <Modal
      open={openProfile}
      onClose={handleCloseProfile}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal__head">
          <TitleCard className="modal__title"> Edit Introduction </TitleCard>
        </div>

        <form id="form-introduction" onSubmit={handleSubmitProfile(onSubmitProfile)}>
          <textarea
            defaultValue={profile.introduction}
            {...registerProfile("introduction")}
            placeholder="Introduction"
            rows="3"
          />
          <input defaultValue={profile.studies} {...registerProfile("studies")} placeholder="Studies"/>
          <input defaultValue={profile.web} {...registerProfile("web")} placeholder="Web"/>
          <select name="gender" defaultValue={profile.from} {...registerProfile("from")}>
            <CountriesList />
          </select>

          <input type="submit" value="Send"/>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalProfile;

const style = {
  fontFamily: "Noto Sans Display",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
};