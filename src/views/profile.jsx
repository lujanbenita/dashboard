import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { useForm } from "react-hook-form";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import RrssInfo from "../components/profile/rrssInfo";
import TitleCard from "../components/common/titleCard";
import LayoutDashboard from "../layout/layoutDashboard";
import ProjectCard from "../components/projects/projectCard";
import ParagraphCard from "../components/common/paragraphCard";
import { updateProfile } from "../redux/user/userAction";
import CountriesList from "../components/forms/countriesList";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

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

      <div className="card-profile card size-row-12">
        <div className="card-profile__img"></div>

        <div className="card-profile__content">

          <div className="card-profile__profile">
            <div className="card-profile__profile-img" onClick={handleOpenUser} style={{backgroundImage: `url(${profile.img})`}}></div>
            <div className="card-profile__profile-name">{profile.name}</div>
            <div className="card-profile__profile-position">{profile.position}</div>
          </div>

          <div className="card-profile__container">
            <RrssInfo title="Post" number="458" />
            <RrssInfo title="Followers" number="12k" />
            <RrssInfo title="Following" number="421" />
          </div>

          <div className="card-profile__rrss">
            <img src="/images/icons/linkedin.png" alt="" />
            <img src="/images/icons/twitter.png" alt="" />
            <img src="/images/icons/instagram.png" alt="" />
          </div>

        </div>
      </div>

      <div className="card-profile-introduction card size-row-4">
        <TitleCard>Introduction</TitleCard>
        <ParagraphCard>{profile.introduction}</ParagraphCard>
        <div className="card-profile-introduction__point">
          <img src="/images/icons/book.png" alt="book" width="16" height="16"/>
          Studied at, <b>{ profile.studies}</b>
        </div>
        <div className="card-profile-introduction__point">
          <img src="/images/icons/globe.png" alt="globe" width="16" height="16" />
          <a href={profile.web} target="_blank"><b>{profile.web}</b></a>
          
        </div>
        <div className="card-profile-introduction__point">
          <img src="/images/icons/location.png" alt="location" width="16" height="16"/>
          From <b>{profile.from}</b>
        </div>
        <AddCircleRoundedIcon
          onClick={handleOpenProfile}
          className="modal__add"
        />
      </div>

      <div className="card-profile-photos card size-row-8">
        <TitleCard>Photos</TitleCard>
        <ParagraphCard>My favorites travel photos</ParagraphCard>
        <Slider {...settings}>
          <img src="/images/travel0.jpg" alt="" />
          <img src="/images/travel1.jpg" alt="" />
          <img src="/images/travel2.jpg" alt="" />
          <img src="/images/travel3.jpg" alt="" />
          <img src="/images/travel5.jpg" alt="" />
          <img src="/images/travel6.jpg" alt="" />
          <img src="/images/travel7.jpg" alt="" />
          <img src="/images/travel8.jpg" alt="" />
        </Slider>
      </div>

      <div className="card-projects card size-row-12">
        <TitleCard>Projects</TitleCard>
        <ParagraphCard>Last projects</ParagraphCard>

        <div className="card-projects__list">

          <ProjectCard 
            title={"Shoes Store"}
            text={"Different people have different taste, and various types of shoes. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
            url={"https://shoes-store-demo.vercel.app/"}
            tags={"#Next #Redux #Stripe @MongoDb"}
            img={"project0.jpg"}
          />

          <ProjectCard 
            title={"Beers project"}
            text={"Beers company web, Only for adults. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, for many for much adipisci velit..."}
            url={"https://beers-web.vercel.app/"}
            tags={"#Next #Redux #JWT #i18n"}
            img={"project1.jpg"}
          />

          <ProjectCard 
            title={"Contact book app"}
            text={"First project as backend. Create your contact book by the face. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
            url={"https://agenda-node-crud.herokuapp.com/"}
            tags={"#node #Express #Mongodb #Mongoose #Handlebars #Tailwind"}
            img={"project2.jpg"}
          />

        </div>
      </div>

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
          {/*  "handleSubmit" will validate your inputs before invoking "Profile"  */}
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

    </LayoutDashboard>
  );
};

export default Profile;

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