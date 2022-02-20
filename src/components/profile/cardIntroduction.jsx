import ParagraphCard from '../common/paragraphCard'
import TitleCard from '../common/titleCard'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'

const CardIntroduction = ({ profile, handleOpenProfile }) => {
  return (
    <div className='card-profile-introduction card size-row-4'>
      <TitleCard>Introduction</TitleCard>
      <ParagraphCard>{profile.introduction}</ParagraphCard>
      <div className='card-profile-introduction__point'>
        <img src='/images/icons/book.png' alt='book' width='16' height='16' />
        Studied at, <b>{profile.studies}</b>
      </div>
      <div className='card-profile-introduction__point'>
        <img src='/images/icons/globe.png' alt='globe' width='16' height='16' />
        <a href={profile.web} target='_blank' rel='noreferrer'><b>{profile.web}</b></a>

      </div>
      <div className='card-profile-introduction__point'>
        <img src='/images/icons/location.png' alt='location' width='16' height='16' />
        From <b>{profile.from}</b>
      </div>
      <AddCircleRoundedIcon
        onClick={handleOpenProfile}
        className='modal__add'
      />
    </div>
  )
}

export default CardIntroduction
