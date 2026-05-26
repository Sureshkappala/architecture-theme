function Projects() {

return (

<div style={styles.container}>

<section style={styles.hero}>

<h1>
Our Projects
</h1>

<p>
Explore our featured architecture
and interior design projects.
</p>

</section>

<section style={styles.grid}>

<div style={styles.card}>

<h2>
Luxury Villa
</h2>

<p>
Premium residential architecture.
</p>

</div>

<div style={styles.card}>

<h2>
Corporate Tower
</h2>

<p>
Modern commercial building.
</p>

</div>

<div style={styles.card}>

<h2>
Smart Interior
</h2>

<p>
Elegant interior solutions.
</p>

</div>

<div style={styles.card}>

<h2>
Green Workspace
</h2>

<p>
Sustainable office concepts.
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

background:"#111",

color:"white",

borderRadius:"20px",

textAlign:"center"
}

};

export default Projects;