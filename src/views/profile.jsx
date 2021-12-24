import ParagraphCard from "../components/common/paragraphCard";
import TitleCard from "../components/common/titleCard";
import LayoutDashboard from "../layout/layoutDashboard";
import Slider from "react-slick";
import ProjectCard from "../components/projects/projectCard";
import RrssInfo from "../components/profile/rrssInfo";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const Profile = () => {
  
  return (
    <LayoutDashboard className="flex" title={"PROFILE"}>

      <div className="card-profile card size-row-12">
        <div className="card-profile__img"></div>

        <div className="card-profile__content">

          <div className="card-profile__profile">
            <div className="card-profile__profile-img"></div>
            <div className="card-profile__profile-name">Peter Parker</div>
            <div className="card-profile__profile-position">Frontend Developer</div>
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
        <ParagraphCard>Hello, I am Peter Parker. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ParagraphCard>
        <div className="card-profile-introduction__point">
          <img src="/images/icons/book.png" alt="book" width="16" height="16"/>
          Studied at Sir, <b>Institute Of Developers</b>
        </div>
        <div className="card-profile-introduction__point">
          <img src="/images/icons/globe.png" alt="globe" width="16" height="16" />
          <a href="https://clujan.eu" target="_blank"><b>www.clujan.eu</b></a>
          
        </div>
        <div className="card-profile-introduction__point">
          <img src="/images/icons/location.png" alt="location" width="16" height="16"/>
          From <b>New York</b>
        </div>
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

    </LayoutDashboard>
  );
};

export default Profile;