import RrssInfo from "./rrssInfo";

const MainProfile = ({profile, handleOpenUser}) => {
  return (
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
  );
};

export default MainProfile;