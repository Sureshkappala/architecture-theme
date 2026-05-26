function Contact() {

return (

<div style={styles.container}>

<section style={styles.hero}>

<h1>
Contact Us
</h1>

<p>
Let’s discuss your architecture
and design requirements.
</p>

</section>

<section style={styles.formSection}>

<input
type="text"
placeholder="Enter Name"
style={styles.input}
/>

<input
type="email"
placeholder="Enter Email"
style={styles.input}
/>

<input
type="text"
placeholder="Project Type"
style={styles.input}
/>

<textarea
placeholder="Enter Message"
style={styles.textarea}
/>

<button style={styles.button}>
Send Message
</button>

</section>

<section style={styles.info}>

<div style={styles.card}>

<h2>
Office
</h2>

<p>
Stackly Architecture Studio
</p>

</div>

<div style={styles.card}>

<h2>
Email
</h2>

<p>
contact@stackly.com
</p>

</div>

<div style={styles.card}>

<h2>
Working Hours
</h2>

<p>
Mon - Sat | 9 AM - 6 PM
</p>

</div>

</section>

</div>

);

}

const styles={

container:{
padding:"60px"
},

hero:{
textAlign:"center",

padding:"70px"
},

formSection:{
display:"flex",

flexDirection:"column",

gap:"20px",

maxWidth:"700px",

margin:"auto"
},

input:{
padding:"16px",

fontSize:"16px"
},

textarea:{
padding:"16px",

height:"150px",

fontSize:"16px"
},

button:{
padding:"16px",

cursor:"pointer",

background:"#111",

color:"white",

border:"none"
},

info:{
display:"flex",

gap:"30px",

marginTop:"70px"
},

card:{
flex:"1",

padding:"35px",

background:"#f5f5f5",

borderRadius:"20px",

textAlign:"center"
}

};

export default Contact;