import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom"
import { IconButton, Badge } from "@material-ui/core"
import {Fastfood, ListAlt, Restaurant, Face}  from "@material-ui/icons"
import  Eggs from "../../assets/avocado1.svg"
import Eggses from "../../assets/avocado2.svg"
import Logo from "../../assets/logo.png"
import Crop from "../../assets/crop.svg"
import Gal from "../../assets/gal1.png"
import "../CartMenu/cartMenu.scss";
import "./recipes.scss"



const RecipeName = () => {
    return (<h2 style={{ fontWeight: "400", fontSize: "20px"}} className="card__title">Prepečeni kruh s jajetom na oko i avokadom</h2> )
}

const RecipeDescription = () => {
    return (<p className="card__description">Bilo za doručak, ručak ili večeru - ovaj zdravi sendvič je brz i ukusan. Napravi ga s raženim, punozrnatim kruhom i dobit ćeš cjelovit obrok koji će ti dati gorivo da savladaš sve izazove dana.

    </p> )
}

const RecipeButtonName = () => {
    return ( <button className="card__btn"><a href="#">Vidi recept</a></button> )
}

const Recipes = () => {  
 
  return (
    <>  <div className="recipe-nav">Što se kuha?<IconButton component={Link} to="/home" aria-label="Show cart items">
          <Badge color="secondary">
              <Fastfood className="cart-icon" />
          </Badge>
      </IconButton>
          <IconButton component={Link} to="/cart" aria-label="Show cart items">
              <Badge color="secondary">
                  <Restaurant className="cart-icon" />
              </Badge>
          </IconButton>
          <IconButton component={Link} to="/loginform" aria-label="Show cart items">
              <Badge color="secondary">
                  <Face className="cart-icon" />
              </Badge>
          </IconButton> 

      </div>  

        <div className="recipe-body"> <div className="card">
    <div className="card__body">
      <img src={Eggs} alt="" className="card__image" />
      <RecipeName />
      <RecipeDescription />
    </div>
    <RecipeButtonName/>
  </div>  <div className="card">
    <div className="card__body">
      <img src={Eggs} alt="" className="card__image" />
      <RecipeName />
      <RecipeDescription />
    </div>
    <RecipeButtonName/>
  </div><div className="card">
    <div className="card__body">
      <img src={Eggs} alt="" className="card__image" />
      <RecipeName />
      <RecipeDescription />
    </div>
    <RecipeButtonName/>
  </div><div className="card">
    <div className="card__body">
      <img src={Eggs} alt="" className="card__image" />
      <RecipeName />
      <RecipeDescription />
    </div>
    <RecipeButtonName/>
  </div><div className="card">
    <div className="card__body">
      <img src={Eggs} alt="" className="card__image" />
      <RecipeName />
      <RecipeDescription />
    </div>
    <RecipeButtonName/>
    
  </div></div><div className="recipefullviewwrapper"> 
  <div className="textbox1">
    <h1 style={{fontWeight: "300", fontSize: "30px", marginBottom: "30px", fontFamily: 'Sen'}}>Prepečeni kruh s jajetom na oko i avokadom</h1>
              Dodaj <b style={{ fontWeight: "700" }}> dimljeni losos </b> za ekstra dozu proteina
              <br></br>
              Uz ovo napravi osvježavajuću salatu od <b style={{ fontWeight: "700" }}>matovilca</b> ili <b style={{ fontWeight: "700" }}>baby špinata</b>
              <br></br>
              <b style={{ fontWeight: "700" }}>Jaja</b> mogu biti i kuhana ili na kajganu, možeš probati i <b> poširana jaja</b>
              <br></br>

              Ostatak <b style={{ fontWeight: "700" }}>avokada</b> pospremi u zatvorenu posudu pa u frižider i kasnije samo odstrani potamnjele djelove nožem
              <br></br>
              Na jaje možeš dodati<b style={{ fontWeight: "700" }}> začine</b> dok se peče, papar i mljevena paprika, svježe ili sušeno mediteransko bilje
              Osim začinima, jaja možeš posuti i sezamom, a avokado začiniti limunovim sokom
              <br></br>
              Avokado možeš narezati na trakice ili zgnječiti vilicom, a još je bolje s guacamole umakom
           <div style={{display: "flex"}}><img style={{display: "inline-flex", width: "200px", height: "200px"}} src={Eggses}></img> <img style={{display: "inline-flex", width: "200px", height: "200px", position: "absolute", zIndex: "3", left: "100px"}} src={Gal}></img></div>
          </div>
          <div className="textbox2">
          VRIJEME ZA PRIPREMU: 5 min
          <br></br>
KUHANJE: 5 min
<br></br>
TOTAL: 10 min
<br></br>
KUHINJA: američka
<br></br>
SERVING: 1toast
<br></br> 
Calories: 229kcal  <br></br>
 Carbohydrates: 23g
<br></br>
Protein: 12g  <br></br> 
Fat: 10g  <br></br>
Saturated fat: 3g  <br></br>
Cholesterol: 186mg  <br></br>
Sodium: 223mg  <br></br>
Fiber: 5g
<br></br>
Sugar: 4g

          </div>
      

 </div>

  </>


         
          
  
           
            
 ) 
}

export default Recipes