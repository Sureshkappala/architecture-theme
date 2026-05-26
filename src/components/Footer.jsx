function Footer() {

return (

<footer style={styles.footer}>

<div>

<h2>
STACKLY
</h2>

<p>
Modern Architecture Studio
</p>

</div>

<div>

<h3>
Quick Links
</h3>

<p>Home</p>
<p>About</p>
<p>Services</p>

</div>

<div>

<h3>
Services
</h3>

<p>Architecture</p>
<p>Interior</p>
<p>Planning</p>

</div>

<div>

<h3>
Contact
</h3>

<p>contact@stackly.com</p>

<p>
+91 XXXXX XXXXX
</p>

</div>

</footer>

);

}

const styles={

footer:{
background:"#111",

color:"white",

padding:"60px",

display:"flex",

justifyContent:"space-around"
}

};

export default Footer;