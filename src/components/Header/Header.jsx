import './Header.css';
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Radio Lira 88.7 FM" className="logo" />
        <div className="header-text">
          <h1>Radio Lira 88.7 FM</h1>
          <p>Tu compañía espiritual</p>
        </div>
      </div>
    </header>
  );
}

export default Header; 