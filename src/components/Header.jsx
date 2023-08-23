import Navbar from "./Navbar";
import "../styles/Header.css";


const fullName = 'Fitim Tahiraj'

function Header() {
    return (
      <header className="header">
        <h1>{fullName}</h1>
        <Navbar />
      </header>
    );
  }

  export default Header;