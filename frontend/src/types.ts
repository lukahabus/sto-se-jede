export interface City {
  name: string;
  canteens: Canteen[];
}

export interface Canteen {
  name: string;
  menu: Meal[];
}

export interface Meal {
  name: string;
  dishes: Dish[];
}

export interface Dish {
  name: string;
  canonicalName: string;
  category: string;
  energy: number;
  carbohydrates: number;
  proteins: number;
  fat: number;
}
