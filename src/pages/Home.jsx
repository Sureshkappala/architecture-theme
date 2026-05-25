import heroImage from "../assets/hero.jpg";
import service1 from "../assets/service.jpg";
import service2 from "../assets/service.jpg";
import service3 from "../assets/service.jpg";

import Navbar from "../components/Navbar";

function Home() {
  const username = localStorage.getItem("username");

  return (
    <div>

      <Navbar />

      {/* HERO SECTION */}
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
          }}
        ></div>

        {/* HERO CONTENT */}
        <div style={{ position: "relative" }}>
          <h2 style={{ color: "white" }}>
            {username
              ? `Welcome, ${username} 👋`
              : "Welcome to Architecture Studio"}
          </h2>

          <h1>Modern Architecture Designs</h1>

          <p>We build elegant and sustainable buildings</p>

          <button>Explore</button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a modern architecture company focused on innovative building
          designs, smart interiors, and premium construction solutions.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-box">

          <div className="card">
            <h3>Interior Design</h3>
            <p>Luxury interior designs for homes and offices.</p>
          </div>

          <div className="card">
            <h3>Urban Planning</h3>
            <p>Smart city and urban architecture planning.</p>
          </div>

          <div className="card">
            <h3>Commercial Design</h3>
            <p>Professional office and commercial building design.</p>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <div id="projects" style={{ padding: "60px", textAlign: "center" }}>
        <h2>Our Projects</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div className="card">
            <h3>Modern House</h3>
            <p>Luxury villa design</p>
          </div>

          <div className="card">
            <h3>Office Building</h3>
            <p>Corporate architecture</p>
          </div>

          <div className="card">
            <h3>Interior Design</h3>
            <p>Modern interior spaces</p>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: architecture@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <button>Contact Now</button>
      </section>

    </div>
  );
}

export default Home;