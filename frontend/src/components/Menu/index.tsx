import { useState } from "react";
import useSWR from "swr";
import { Canteen, City, Meal } from "types";

import { fetcher } from "utils/net";
import Dishes from "./Dishes";

const Menu = () => {
  const { data, error } = useSWR("http://localhost:3000/api/menu", fetcher);
  const [city, setCity] = useState("Split");
  const [canteen, setCanteen] = useState("Restoran FESB");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const menu = data
    .find((c: City) => c.name === city)
    .canteens.find((c: Canteen) => c.name === canteen);

  return (
    <div>
      <h2>{menu.name}</h2>

      <select
        defaultValue={city}
        onChange={(e) => {
          setCity(e.target.value);
          setCanteen(
            data.find((c: City) => c.name === e.target.value).canteens[0].name
          );
        }}
      >
        {data.map((c: City) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>

      <select
        defaultValue={canteen}
        onChange={(e) => setCanteen(e.target.value)}
      >
        {data
          .find((c: City) => c.name === city)
          .canteens.map((c: Canteen) => (
            <option key={c.name}>{c.name}</option>
          ))}
      </select>

      {menu.menu.map((meal: Meal, i: number) => (
        <div key={i}>
          <h3>{meal.name}</h3>
          <Dishes dishes={meal.dishes} />
        </div>
      ))}

      <pre>{JSON.stringify(menu, null, 2)}</pre>
    </div>
  );
};

export default Menu;
