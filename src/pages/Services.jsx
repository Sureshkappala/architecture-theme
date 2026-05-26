function Services() {

return (

<div style={styles.container}>

<section style={styles.hero}>

<h1>
Our Services
</h1>

<p>
Architecture solutions designed for
modern living and business spaces.
</p>

</section>

<section style={styles.grid}>

<div style={styles.card}>

<h2>
Architecture Design
</h2>

<p>
Modern building planning and
creative concepts.
</p>

</div>

<div style={styles.card}>

<h2>
Interior Design
</h2>

<p>
Premium interior experiences
for modern spaces.
</p>

</div>

<div style={styles.card}>

<h2>
Project Management
</h2>

<p>
End to end execution and
professional delivery.
</p>

</div>

<div style={styles.card}>

<h2>
Consultation
</h2>

<p>
Expert guidance for
architectural decisions.
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

grid:{
display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:"30px"
},

card:{
padding:"40px",

background:"#f5f5f5",

borderRadius:"20px",

textAlign:"center"
}

};

export default Services;