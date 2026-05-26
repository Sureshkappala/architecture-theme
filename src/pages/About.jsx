function About() {

return (

<div style={styles.container}>

<section style={styles.hero}>

<h1>
About Stackly Architecture
</h1>

<p>
Designing modern spaces with creativity
and sustainable architecture.
</p>

</section>

<section style={styles.content}>

<div style={styles.card}>

<h2>
Our Mission
</h2>

<p>
Deliver premium architecture
solutions with innovation.
</p>

</div>

<div style={styles.card}>

<h2>
Our Vision
</h2>

<p>
Create inspiring buildings
for future generations.
</p>

</div>

<div style={styles.card}>

<h2>
Our Values
</h2>

<p>
Quality, creativity and
customer satisfaction.
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

padding:"80px"
},

content:{
display:"flex",

gap:"30px"
},

card:{
flex:"1",

padding:"30px",

background:"#f5f5f5",

borderRadius:"20px",

textAlign:"center"
}

};

export default About;