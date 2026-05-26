import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const [username,setUsername]=useState("");

const navigate=useNavigate();

const handleLogin=()=>{

localStorage.setItem(
"username",
username
);

navigate("/");

};

return (

<div style={styles.container}>

<h1>
Login
</h1>

<input
type="text"
placeholder="Enter Username"
value={username}
onChange={(e)=>
setUsername(e.target.value)
}
style={styles.input}
/>

<button
style={styles.button}
onClick={handleLogin}
>

Login

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

gap:"20px"
},

input:{
padding:"15px",

width:"300px"
},

button:{
padding:"15px 40px",

cursor:"pointer"
}

};

export default Login;