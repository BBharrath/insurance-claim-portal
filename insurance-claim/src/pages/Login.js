


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUser}) {
    const [email,setEmail]=useState("");
    const [role,setRole]=useState("customer");
    const navigate=useNavigate();
    const handleLogin=()=>{
        const user={email,role};
        setUser(user);
        if(role==="customer"){
            navigate("/customer");
        }else{
            navigate("/admin");
        }  
    }
    
    return (
        <div style={{ padding: 20 }}>
            <h2>Login Page</h2>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <select value={role} onChange={(e)=>setRole(e.target.value)}>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
            </select>
            <br />
            <br />
            <button onClick={handleLogin}>Login</button>   
        </div>
    );
}
export default Login;