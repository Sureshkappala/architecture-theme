function Team() {

return (

<div style={styles.container}>

<section style={styles.hero}>

<h1>
Our Team
</h1>

<p>
Meet the professionals behind
our architecture projects.
</p>

</section>

<section style={styles.grid}>

<div style={styles.card}>

<h2>
Lead Architect
</h2>

<p>
Design strategy and planning.
</p>

</div>

<div style={styles.card}>

<h2>
Interior Designer
</h2>

<p>
Creative and premium interiors.
</p>

</div>

<div style={styles.card}>

<h2>
Project Manager
</h2>

<p>
Execution and delivery.
</p>

</div>

<div style={styles.card}>

<h2>
Design Consultant
</h2>

<p>
Project consultation support.
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

export default Team;