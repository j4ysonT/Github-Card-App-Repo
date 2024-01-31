import React from 'react';

const Card = ({ avatar_url, name, company }) => (
  <div className="github-profile">
    <img src={avatar_url} alt={name} />
    <div className="info">
      <div className="name">{name}</div>
      <div className="company">{company}</div>
    </div>
  </div>
);

export default Card;