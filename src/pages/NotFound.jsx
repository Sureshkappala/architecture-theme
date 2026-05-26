import { useNavigate } from "react-router-dom";

function NotFound() {

const navigate = useNavigate();

return (

<div style={styles.container}>

<h1 style={styles.code}>
404
</h1>

<h2>
Page Under Development
</h2>

<p>
The page you requested is not available.
</p>

<button
style={styles.button}
onClick={() => navigate("/")}
>
Go Home
</button>

</div>

);

}

const styles={

container:{
height:"100vh",

display:"flex",

flexDirection:"column",

justifyContent:"center",

alignItems:"center",

textAlign:"center"
},

code:{
fontSize:"100px",

marginBottom:"10px"
},

button:{
padding:"15px 35px",

marginTop:"20px",

cursor:"pointer",

border:"none"
}

};

export default NotFound;