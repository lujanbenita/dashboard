import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import Slider from 'react-slick';

import ParagraphCard from '../common/paragraphCard';
import TitleCard from '../common/titleCard';

import useScript from '../../hooks/useScript';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const CardPhotos = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js")
  useScript("https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js")

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css"/>
      </Helmet> 
        
      <div className="card-profile-photos card size-row-8">
        <TitleCard>Photos</TitleCard>
        <ParagraphCard>My favorites travel photos</ParagraphCard>
          
        <Slider {...settings}>
          <a data-fancybox="travel" href="/images/travel0.jpg">
            <img src="/images/travel0.jpg" alt="" />
          </a>
          <a data-fancybox="travel" href="/images/travel1.jpg">
            <img src="/images/travel1.jpg" alt="" />
          </a>
          <a data-fancybox="travel" href="/images/travel2.jpg">
            <img src="/images/travel2.jpg" alt="" />
          </a>
          <a data-fancybox="travel" href="/images/travel3.jpg">
            <img src="/images/travel3.jpg" alt="" />
          </a>
          <a data-fancybox="travel" href="/images/travel5.jpg">
            <img src="/images/travel5.jpg" alt="" />
          </a>
          <a data-fancybox="travel" href="/images/travel6.jpg">
            <img src="/images/travel6.jpg" alt="" />
          </a>
          <a data-fancybox="travel" href="/images/travel7.jpg">
            <img src="/images/travel7.jpg" alt="" />
          </a>
          <a data-fancybox="travel" href="/images/travel8.jpg">
            <img src="/images/travel8.jpg" alt="" />
          </a>
        </Slider>

      </div>
    </>
  );
};

export default CardPhotos;