import { closest } from "fastest-levenshtein";
import { Dish } from "./scrape_menu";
import { dishes } from "./seed/nutritional_data.json";

const emptyNutritionalDataEntry = {
  dish: "",
  category: "",
  energy: 0,
  carbohydrates: 0,
  proteins: 0,
  fat: 0,
};

function addNutritionalData(dishName: string): Dish {
  const canonicalName = closest(
    dishName,
    dishes.map((d) => d.dish)
  );

  const { category, energy, carbohydrates, proteins, fat } =
    dishes.find((d) => d.dish === canonicalName) || emptyNutritionalDataEntry;

  return {
    name: dishName,
    canonicalName,
    category,
    energy,
    carbohydrates,
    proteins,
    fat,
  };
}

export { addNutritionalData };
