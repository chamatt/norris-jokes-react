import React from "react";
import "./Header.css";

const Header = props => {
  const style = {
    backgroundImage: `url(${props.image})`
  };

  return (
    <div className="hero-container" style={style}>
      <div className="hero-body">
        <div className="hero-title">{props.title}</div>
        <div className="hero-subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default Header;
