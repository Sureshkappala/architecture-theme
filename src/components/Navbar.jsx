import { Link } from "react-router-dom";

function Navbar() {

return (

<nav style={styles.nav}>

<div style={styles.logo}>
STACKLY
</div>

<div style={styles.menu}>

<Link style={styles.link} to="/">
Home
</Link>

<Link style={styles.link} to="/about">
About
</Link>

<Link style={styles.link} to="/services">
Services
</Link>

<Link style={styles.link} to="/projects">
Projects
</Link>

<Link style={styles.link} to="/blog">
Blog
</Link>

<Link style={styles.link} to="/team">
Team
</Link>

<Link style={styles.link} to="/contact">
Contact
</Link>

<Link to="/login">

<button style={styles.loginBtn}>
Login
</button>

</Link>

</div>

</nav>

);

}

const styles = {

nav:{
display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"20px 60px",

background:
"linear-gradient(90deg,#0f172a,#111827)",

position:"sticky",

top:"0",

zIndex:"1000"
},

logo:{

fontSize:"34px",

fontWeight:"900",

letterSpacing:"3px",

background:
"linear-gradient(90deg,#38bdf8,#06b6d4,#67e8f9)",

WebkitBackgroundClip:"text",

WebkitTextFillColor:"transparent",

cursor:"pointer"
},

menu:{
display:"flex",

gap:"28px",

alignItems:"center"
},

link:{
color:"#ffffff",

textDecoration:"none",

fontWeight:"600"
},

loginBtn:{

padding:"12px 28px",

border:"none",

borderRadius:"30px",

background:
"linear-gradient(90deg,#f97316,#fb923c)",

color:"white",

fontWeight:"700",

cursor:"pointer",

boxShadow:
"0 6px 20px rgba(249,115,22,.4)"
}

};

export default Navbar;