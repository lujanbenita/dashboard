import React from 'react';
import TitleCard from '../common/titleCard';
import ArrowIcon from '../icons/arrowIcon';

const InfoLinks = ({dataCoin}) => {
  return (
    <div className="crypto__max-min">
      <TitleCard title={"h4"}>Links info</TitleCard>
  
      <div className="row">
        <ArrowIcon fill="#0882DF"/>
        <a href={dataCoin.links.homepage[0]} target="_blank" className="crypto__rank">homepage</a>
      </div>
      <div className="row">
        <ArrowIcon fill="#0882DF"/>
        <a href={dataCoin.links.official_forum_url[0]} target="_blank" className="crypto__rank">official forum </a>
      </div>
      <div className="row">
        <ArrowIcon fill="#0882DF"/>
        <a href={dataCoin.links.subreddit_url} target="_blank" className="crypto__rank">subreddit_url</a>
      </div>

    </div>
  );
};

export default InfoLinks;