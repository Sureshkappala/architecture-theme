function Blog() {

return (

<div style={styles.container}>

<section style={styles.hero}>

<h1>
Architecture Blog
</h1>

<p>
Latest ideas, trends and inspiration
for modern architecture.
</p>

</section>

<section style={styles.grid}>

<div style={styles.card}>

<h2>
Modern Architecture
</h2>

<p>
Explore clean and elegant
building concepts.
</p>

</div>

<div style={styles.card}>

<h2>
Interior Trends
</h2>

<p>
Discover premium and
modern interior ideas.
</p>

</div>

<div style={styles.card}>

<h2>
Smart Buildings
</h2>

<p>
Technology driven
architecture solutions.
</p>

</div>

<div style={styles.card}>

<h2>
Sustainable Design
</h2>

<p>
Eco friendly planning
and construction.
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

export default Blog;