import logoImg from "lib/assets/images/logo/character.svg";
import logoWordmark from "lib/assets/images/logo/logo-wordmark.svg";

const Logo = () => {
  return (
    <a href="#" className="logo">
      <img
        className="logo-icon"
        src={logoImg}
        alt="California Bear working on laptop"
      />
      <img className="logo-wordmark" src={logoWordmark} alt="californiaDev" />
    </a>
  );
};

export default Logo;
