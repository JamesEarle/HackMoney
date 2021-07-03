import React from "react";
import background from "../img/banner-woods-fog.jpeg"

const Header = () => {
  const styleConfigBackground = {
    margin: "0",
    padding: "0",
    width: "100%",
    minWidth: "300px",
    height: "100%",
    minHeight: "350px",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPositionY: "center"
  }

  const styleConfigHeader = {
    margin: "0",
    textAlign: "center",
    paddingTop: "8%"
  }

  return (
    <header style={styleConfigBackground}>
      <h1 style={styleConfigHeader}>Your Royalties, Your Way</h1>
    </header>
  );
}

export default Header;