import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <div>

      {/* HERO */}

      <section style={styles.hero}>
        <div style={styles.overlay}>

          <h3 style={styles.welcome}>
            Welcome {username || "Guest"}
          </h3>

          <h1 style={styles.title}>
            BUILDING THE FUTURE OF ARCHITECTURE
          </h1>

          <p style={styles.text}>
            Creating modern spaces with innovation,
            beauty and sustainable design.
          </p>

          <button
style={styles.button}
onClick={() => navigate("/projects-page")}
>
Explore Projects
</button>

        </div>
      </section>

      {/* ABOUT */}

      <section style={styles.about}>

        <div style={styles.left}>

          <h2 style={styles.heading}>
            About Stackly Architecture
          </h2>

          <p style={styles.desc}>
            We create residential and commercial
            spaces with modern planning and
            premium architectural experiences.
          </p>

<button
style={styles.readBtn}
onClick={() => navigate("/about-more")}
>
Read More
</button>
        </div>

        <div style={styles.right}>

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="architecture"
            style={styles.image}
          />

        </div>

      </section>

      {/* SERVICES */}

      <section style={styles.section}>

        <h1 style={styles.sectionTitle}>
          Our Services
        </h1>

        <div style={styles.grid}>

          <div style={styles.card}>
            <h2>Architecture Design</h2>
            <p>Modern building planning.</p>
          </div>

          <div style={styles.card}>
            <h2>Interior Design</h2>
            <p>Premium interior spaces.</p>
          </div>

          <div style={styles.card}>
            <h2>Project Management</h2>
            <p>Professional delivery.</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section style={styles.section}>

        <h1 style={styles.sectionTitle}>
          Featured Projects
        </h1>

        <div style={styles.grid}>

          <div style={styles.darkCard}>
            <h2>Luxury Villa</h2>
            <p>Elegant residential project.</p>
          </div>

          <div style={styles.darkCard}>
            <h2>Corporate Tower</h2>
            <p>Commercial architecture.</p>
          </div>

          <div style={styles.darkCard}>
            <h2>Smart Interior</h2>
            <p>Modern interior solutions.</p>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section style={styles.stats}>

        <div>
          <h1>250+</h1>
          <p>Projects</p>
        </div>

        <div>
          <h1>80+</h1>
          <p>Clients</p>
        </div>

        <div>
          <h1>12+</h1>
          <p>Years</p>
        </div>

        <div>
          <h1>30+</h1>
          <p>Awards</p>
        </div>

      </section>

      {/* TESTIMONIALS */}

      <section style={styles.section}>

        <h1 style={styles.sectionTitle}>
          Client Testimonials
        </h1>

        <div style={styles.grid}>

          <div style={styles.card}>
            <h3>Rahul</h3>
            <p>Excellent architecture execution.</p>
          </div>

          <div style={styles.card}>
            <h3>Priya</h3>
            <p>Beautiful design experience.</p>
          </div>

          <div style={styles.card}>
            <h3>Arjun</h3>
            <p>Professional and modern team.</p>
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section style={styles.contact}>

        <h1>
          Start Your Dream Project
        </h1>

        <p>
          Let's create premium spaces together.
        </p><button
style={styles.contactBtn}
onClick={() => navigate("/contact-now")}
>
Contact Us
</button>

      </section>

    </div>
  );
}

const styles = {

hero:{
height:"90vh",
backgroundImage:
"url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2')",
backgroundSize:"cover",
backgroundPosition:"center"
},

overlay:{
height:"100%",
background:"rgba(0,0,0,.55)",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
color:"white",
textAlign:"center"
},

welcome:{
fontSize:"30px"
},

title:{
fontSize:"60px",
width:"70%"
},

text:{
fontSize:"20px",
width:"60%"
},

button:{
padding:"15px 35px",
border:"none",
marginTop:"20px"
},

about:{
display:"flex",
padding:"80px",
gap:"50px",
alignItems:"center"
},

left:{
flex:1
},

right:{
flex:1
},

heading:{
fontSize:"42px"
},

desc:{
fontSize:"20px",
lineHeight:"35px"
},

readBtn:{
padding:"14px 30px",
marginTop:"20px"
},

image:{
width:"100%",
borderRadius:"20px"
},

section:{
padding:"80px"
},

sectionTitle:{
fontSize:"45px",
textAlign:"center",
marginBottom:"40px"
},

grid:{
display:"flex",
gap:"30px"
},

card:{
flex:1,
padding:"30px",
background:"#f5f5f5",
borderRadius:"20px",
textAlign:"center"
},

darkCard:{
flex:1,
padding:"40px",
background:"#111",
color:"white",
borderRadius:"20px",
textAlign:"center"
},

stats:{
display:"flex",
justifyContent:"space-around",
padding:"80px",
background:"#111",
color:"white",
textAlign:"center"
},

contact:{
padding:"100px",
background:"#111",
color:"white",
textAlign:"center"
},

contactBtn:{
padding:"15px 40px",
marginTop:"20px"
}

};

export default Home;