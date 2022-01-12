import Logo from "../../assets/images/logo.svg";
import Ball from "../../assets/images/POKEBOLA.svg";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="" />

      <div>
        <button>
          {" "}
          <img src={Ball} alt="" /> MEU <br />
          POKEDEX
        </button>
      </div>
    </Container>
  );
};

export default Header;
