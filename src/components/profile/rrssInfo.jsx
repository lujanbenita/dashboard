import React from 'react';

const RrssInfo = ({number, title}) => {
  return (
    <div className="card-profile__item">
      <div className="card-profile__item-number">{number}</div>
      <div className="card-profile__item-title">{title}</div>
    </div>
  );
};

export default RrssInfo;