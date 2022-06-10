import { useEffect, useState } from "react";
import useSWR from "swr";
import { Canteen, City, Meal, Dish } from "types";
import { fetcher } from "utils/net";
import Dishes from "./Dishes";
import Pizza from "../../assets/pizz-slice.svg";
import Pot from "../../assets/pot.svg";


import "../Menu/menu.scss";

const Menu = () => {
  const { data, error } = useSWR("http://localhost:3001/api/menu", fetcher);
  const [city, setCity] = useState("Zagreb");
  const [canteen, setCanteen] = useState("Cassandra");
  const [selectedDishes, setSelectedDishes] = useState(
    JSON.parse(localStorage.getItem("selectedDishes") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
  }, [selectedDishes]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const menu = data
    .find((c: City) => c.name === city)
    .canteens.find((c: Canteen) => c.name === canteen);

  const handleAdd = (dish: Dish) => {
    // @ts-ignore
    setSelectedDishes((prev) => [...prev, dish]);
    console.log(dish);
  };

  const handleRemove = (dish: Dish) => {
    // @ts-ignore
    setSelectedDishes((prev) => prev.filter((d) => d.name !== dish.name));
  };

  return (
    <>
      <h2 className="h2menu">{menu.name}</h2>
     
      <div className="home-body">
     
        <img
          style={{ position: "absolute", top: "300px", left: "100px" }}
          src={Pizza}
        ></img>
        <h2 className="rest-name">
          {menu.name}, {city}
        </h2>

        <div className="list-choice-container">
          <div className="list-choice">
         
            <select
              style={{ marginRight: "40px" }}
              defaultValue={canteen}
              onChange={(e) => setCanteen(e.target.value)}
            >
              {data
                .find((c: City) => c.name === city)
                .canteens.map((c: Canteen) => (
                  <option key={c.name}>{c.name}</option>
                ))}
            </select>
            <select
              style={{ width: "100px" }}
              defaultValue={city}
              onChange={(e) => {
                setCity(e.target.value);
                setCanteen(
                  data.find((c: City) => c.name === e.target.value).canteens[0]
                    .name
                );
              }}
            >
              {data.map((c: City) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
          
          </div>
        </div>
      </div>

      {menu.menu.map((meal: Meal, i: number) => (
        <div key={i}>
          <h3>{meal.name}</h3>
          <Dishes
            dishes={meal.dishes}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        </div>
      ))}
    </>
  );
};

export default Menu;
