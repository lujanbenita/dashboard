import React from 'react';

const TitleCard = ({children, title = 'h3'}) => {
  return (
    <div className="title-card">
      {title === 'h4'
        ? <h4> {children}</h4>
        : <h3>{children}</h3>
      }
    </div>
  );
}

export default TitleCard;