import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { username: username, password: password };

    axios.post("http://localhost:3001/Auth/login", data)
      .then((response) => {
        if (response.data.error) {alert(response.data.error)}
        else{
          sessionStorage.setItem("accessToken",response.data);
        };
        
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
