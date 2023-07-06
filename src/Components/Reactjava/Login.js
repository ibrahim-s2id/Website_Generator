import react from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
    event.preventDefault();
	//ip back and name 
    fetch("http://127.0.0.1:8000/" + "LoginUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
	  //data send in back
      body: JSON.stringify({
		  //same name in back
        Username: event.target.Username.value,
        Password: event.target.Password.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result=="The user not found!!"){
          alert(result)
          window.location.reload(true);
        }
        else{
          localStorage.setItem("idAdmin",result )
          getValidity(result)
          // alert("This is ID user : "+result)
          // navigate("/Home");
        //  window.location.reload(true);
        }
      })
      .catch((err) => alert(err,"User Name or Password is incorrected! "));
  };
  const getValidity=(event)=>{ 
      fetch("http://127.0.0.1:8000/"+"GetCounter", { 
        method: "POST", 
        headers: { 
          Accept: "application/json", 
          "Content-Type": "application/json", 
        }, 
        body: JSON.stringify({ 
          UserId: localStorage.getItem('idAdmin') 
          // event
        }), 
      }) 
        .then((res) => res.json()) 
        .then((result) => { 
            localStorage.setItem("Counter",result) 
            navigate("/Home"); 
            alert("You have only "+localStorage.getItem("Counter")+" credit left")


          }) 
    }
  return (
    <div>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
        <h3>Login Here</h3>
        <label for="username">Username</label>
        <input
          type="text"
          name="Username"
          placeholder="User Name"
          required
          autoFocus
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          required
        />
        <button className="mem">Login</button>
        <div className="text">
        
        <h5>You don't have an account? <a href="/Register" >Register</a></h5>
     	  </div>
        </form>
    </div>
  );

}
export default Login;
