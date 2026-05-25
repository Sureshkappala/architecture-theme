import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>Architecture Theme</h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>
      <nav style={{
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  background: "#111",
  color: "white",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000
}}></nav>

    </nav>
  );
}

export default Navbar;