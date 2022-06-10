import React, { useEffect, useState } from "react";
import { Canteen, City, Meal, Dish } from "types";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Badge } from "@material-ui/core";
import {
  Face,
  Fastfood,
  ListAlt,
  Restaurant,
} from "@material-ui/icons";
import Logo from "../../assets/logo.png";
import Menzo2 from "../../assets/guy1.png";
import Menzo3 from "../../assets/guy2.png";
import Flash from "../../assets/blink-flash.svg";
import Dishes from "components/Menu/Dishes";
import "../CartMenu/cartMenu.scss";

const CartMenu = () => {
  const [selectedDishes, setSelectedDishes] = useState(
    JSON.parse(localStorage.getItem("selectedDishes") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
  }, [selectedDishes]);

  // const menu = data
  //   .find((c: City) => c.name === city)
  //   .canteens.find((c: Canteen) => c.name === canteen);

  const handleRemoveAll = () => {
    setSelectedDishes([]);
  };

  const handleRemove = (dish: Dish) => {
    // @ts-ignore
    setSelectedDishes((prev) => prev.filter((d) => d.name !== dish.name));
  };

  return (
    <>
      <div className="rest-menu-h1">
        Što je na tanjuru?
        <IconButton component={Link} to="/home" aria-label="Show cart items">
<Badge  color="secondary">
            <Fastfood />
          </Badge>
</IconButton>
     
<IconButton component={Link} to="/loginform" aria-label="Show cart items">
<Badge  color="secondary">
            <Face className="cart-icon"/>
          </Badge>
</IconButton>

<IconButton component={Link} to="/recipes" aria-label="Show cart items">
<Badge  color="secondary">
            <ListAlt className="cart-icon"/>
          </Badge>
</IconButton>
        <button onClick={() => handleRemoveAll()} className="clearbutton">
          Isprazni tanjur
        </button>
  <div className="navbar-container"></div>
      </div>
 
      <table>
        <thead>
          <tr style={{ fontSize: "20px" }}>
            <th>ENERGIJA</th>
            <th>UGLJIKOHIDRATI</th>
            <th>PROTEINI</th>
            <th>MASTI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontSize: "25px" }}>
              {" "}
            E {selectedDishes
                .map((dish: Dish) => dish.energy)
                .reduce((a: number, b: number) => a + b, 0)
                .toFixed(1)}{" "}
              kcal
            </td>
            <td style={{ fontSize: "25px" }}>
              {" "}
            C {selectedDishes
                .map((dish: Dish) => dish.carbohydrates)
                .reduce((a: number, b: number) => a + b, 0)
                .toFixed(1)}{" "}
              g
            </td>
            <td style={{ fontSize: "25px" }}>
              {" "}
             P {selectedDishes
                .map((dish: Dish) => dish.proteins)
                .reduce((a: number, b: number) => a + b, 0)
                .toFixed(1)}{" "}
              g
            </td>
            <td style={{ fontSize: "25px" }}>
              {" "}
            F {selectedDishes
                .map((dish: Dish) => dish.fat)
                .reduce((a: number, b: number) => a + b, 0)
                .toFixed(1)}{" "}
              g
            </td>
          </tr>
        </tbody>
      </table>
  
      <div style={{ paddingTop: "100px" }}>
        {/**Tu su remove buttoni kojim treba dodijelit onClick*/}
        {selectedDishes.map((dish: Dish) => (
          <div
            style={{
              fontSize: "20px",
              marginBottom: "30px",
              position: "relative",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              border: "2px",
              borderColor: "black",
              maxWidth: "fit-content",
            }}
          >
            {" "}
            {dish.name} / Energija {dish.energy} / Ugljikohidrati{" "}
            {dish.carbohydrates} / Proteini {dish.proteins} / Masti {dish.fat}
            <button
              type="button"
              className="listbutton"
              onClick={() => handleRemove(dish)}
            >
              Ukloni<span className="sr-only">, {dish.name}</span>
            </button>{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default CartMenu;
