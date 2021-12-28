import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TitleCard from '../common/titleCard';

const ModalUser = ({
  profile,
  openUser,
  registerUser,
  onSubmitUser,
  handleCloseUser,
  handleSubmitUser,
}) => {

  return (
    <Modal
      open={openUser}
      onClose={handleCloseUser}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal__head">
          <TitleCard className="modal__title"> Edit User </TitleCard>
        </div>

        <form id="form-user" onSubmit={handleSubmitUser(onSubmitUser)}>
          <input defaultValue={profile.img} {...registerUser("img")} placeholder="Url img"/>
          <input defaultValue={profile.name} {...registerUser("name")} placeholder="Name"/>
          <input defaultValue={profile.position} {...registerUser("position")} placeholder="Position"/>

          <input type="submit" value="Send" />
        </form>
      </Box>
    </Modal>
  );
};

export default ModalUser;

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