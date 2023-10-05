import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="centeredTextAlign">Doggos site</h1>
      <nav className="centeredTextAlign">
            <Link to="/" className="link">Home</Link>
            <Link to="/AddEdit" className="link">Add Doggo</Link>
      </nav>
    </div>
  );
}

export default Header;
