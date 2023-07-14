import logo from "../assets/logo.webp";
import Pokeball from "../ui/Pokeball";

function Navbar() {
  return (
    <nav>
      <Pokeball />
      <img src={logo} alt="logo" />
      <Pokeball />
    </nav>
  );
}

export default Navbar;
