import logo from "../assets/logo.png";
import "../styles/Banner.css";

function Banner() {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo"></img>
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}

// permet d'éviter d'utiliser les accolades lors de l'import
export default Banner;
