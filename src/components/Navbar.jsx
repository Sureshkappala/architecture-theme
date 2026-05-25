import { Link } from "react-router-dom";

function Navbar() {
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#111",
        color: "white",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <h2>ArchDesign</h2>

      {/* LINKS */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/services" style={{ color: "white" }}>Services</Link>
        <Link to="/projects" style={{ color: "white" }}>Projects</Link>
        <Link to="/contact" style={{ color: "white" }}>Contact</Link>
        <Link to="/login" style={{ color: "white" }}>Login</Link>
      </div>

      {/* USER WELCOME + LOGOUT */}
      <div>
        {username ? (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span>Hi, {username} 👋</span>

            <button
              onClick={handleLogout}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          "Guest"
        )}
      </div>
    </nav>
  );
}

export default Navbar;