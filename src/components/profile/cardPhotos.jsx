import Slider from 'react-slick';
import ParagraphCard from '../common/paragraphCard';
import TitleCard from '../common/titleCard';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const CardPhotos = () => {
  return (
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
  );
};

export default CardPhotos;