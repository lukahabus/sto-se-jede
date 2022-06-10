import React from 'react'
import { useState } from 'react'
import "../Home/styles/login.scss"
import loginqueries from "./loginqueries"
import "./styles/login.scss"
import {Link, useLocation} from "react-router-dom"
import { IconButton, Badge } from "@material-ui/core"
import { Fastfood, ListAlt, Restaurant}  from "@material-ui/icons"


const LoginForm = () => {
{/** const [details, setDetails] = useState({name:"", email: "", password:""});
    const [user, setUser] = useState({name: "", email:""})
    const [error, setError] = useState("");
    const admin = {
        email: "luka.habus@gmail.com",
        password: "admin123"
    }
    const Login = () => {

        if (details.email == admin.email && details.password == admin.password){
            console.log("Uspješan login");
            setUser({
                name: details.name,
                email: details.email
            })
        }
     else {
         setError("Neispravni detalji"); 
    }

    const LogOut = () => {
        setUser({name: "", email:""})};
 
    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
    } */} 

  

  return (

  
      <> <div className="navbar-container">Dobrodošli<IconButton component={Link} to="/home" aria-label="Show cart items">
      <Badge color="secondary">
          <Fastfood className="cart-icon" />
      </Badge>
  </IconButton>
      <IconButton component={Link} to="/cart" aria-label="Show cart items">
          <Badge color="secondary">
              <Restaurant className="cart-icon" />
          </Badge>
      </IconButton>

      <IconButton component={Link} to="/recipes" aria-label="Show cart items">
          <Badge color="secondary">
              <ListAlt className="cart-icon" />
          </Badge>
      </IconButton> 
   </div>

        

    <div className="materialContainer">


           <div className="box">

              <div className="title">ULOGIRAJ</div>

              <div className="input">
                 <label for="name">Korisničko ime</label>
                 <input type="text" name="name" id="name" />
                 <span class="spin"></span>
              </div>

              <div className="input">
                 <label for="pass">Lozinku</label>
                 <input type="password" name="pass" id="pass" />
                 <span class="spin"></span>
              </div>

              <div className="button login">
                 <IconButton component={Link} to="*"><button style={{ width: "200px", marginBottom: "10px" }}><span>POTVRDI</span> <i class="fa fa-check"></i></button></IconButton>
              </div>

              <a href="" class="pass-forgot">Zaboravljena lozinka?</a>

           </div>

           <div className="overbox">
              <div className="material-button alt-2"><span class="shape"></span></div>

              <div className="title">REGISTRIRAJ</div>

              <div className="input">
                 <label for="regname">Korisničko ime</label>
                 <input type="text" name="regname" id="regname" />
                 <span className="spin"></span>
              </div>

              <div className="input">
                 <label for="regpass">Lozinku</label>
                 <input type="password" name="regpass" id="regpass" />
                 <span className="spin"></span>
              </div>

              <div className="input">
                 <label for="reregpass">Ponovi lozinku</label>
                 <input type="password" name="reregpass" id="reregpass" />
                 <span className="spin"></span>
              </div>

              <div className="button">
                 <button><span>POTVRDI</span></button>
              </div>


           </div>

        </div></>
  )
}


    


export default LoginForm