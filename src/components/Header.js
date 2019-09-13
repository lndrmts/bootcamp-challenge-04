import React from "react";

import logo from "../assets/facebook.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Facebook Logo" />
      <p className="my--perfil">Meu Perfil</p>
    </header>
  );
};

export default Header;
