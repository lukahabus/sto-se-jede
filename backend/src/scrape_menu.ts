import { fetch } from "undici";
import { JSDOM } from "jsdom";
import { addNutritionalData } from "./utils";

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

async function scrape_menu_st(): Promise<Canteen[]> {
  const res = await fetch("https://prod2.unispot.live/api/public/mess");
  const json = await res.json();

  if (!Array.isArray(json)) {
    return [];
  }

  return json.map(({ name, menu }) => ({
    name,
    menu: Object.keys(menu).map((meal) => {
      const dishes: string[] = [];

      if ("menus" in menu[meal]) {
        for (let m of menu[meal].menus) {
          dishes.push(...m.dishes);
        }
      }

      if ("meals" in menu[meal]) {
        for (let m of menu[meal].meals) {
          dishes.push(m.dish);
        }
      }

      return {
        name: meal === "lunch" ? "Ručak" : "Večera",
        dishes: [...new Set(dishes)].map(addNutritionalData),
      };
    }),
  }));
}

async function scrape_menu_zg(): Promise<Canteen[]> {
  const scrape_cassandra = async () => {
    const res = await fetch("https://www.cassandra.hr/studentski-menu/");
    const html = await res.text();
    const dom = new JSDOM(html);

    const data =
      dom.window.document.querySelector("article")?.textContent || "";
    const dishes = data
      .split("\n")
      .filter((l) => /^[^\s]+/.test(l))
      .filter((v, i, a) => a.indexOf(v) === i)
      .filter((dish) => dish.indexOf("MENU") === -1)
      .filter((dish) => dish.indexOf("202") === -1)
      .map(addNutritionalData);

    return {
      name: "Cassandra",
      menu: [{ name: "Ručak", dishes }],
    };
  };

  const scrape_odeon = async () => {
    const res = await fetch("https://odeon.hr/dnevni-meni-studentska-menza/");
    const html = await res.text();
    const dom = new JSDOM(html);

    const data =
      dom.window.document.querySelector(".entry-content")?.textContent || "";
    const dishes = data
      .split("\n")
      .filter((l) => /^[^\s]+/.test(l))
      .filter((v, i, a) => a.indexOf(v) === i)
      .filter((dish) => dish.indexOf("Menu") === -1)
      .map(addNutritionalData);

    return {
      name: "Odeon",
      menu: [{ name: "Ručak", dishes }],
    };
  };

  return [await scrape_cassandra(), await scrape_odeon()];
}

async function scrape_menu_vz(): Promise<Canteen[]> {
  const urls = [
    "https://www.scvz.unizg.hr/jelovnik-varazdin/",
    "https://www.scvz.unizg.hr/studentski-restoran-cakovec/",
    "https://www.scvz.unizg.hr/studentski-restoran-koprivnica/",
    "https://www.scvz.unizg.hr/studentski-restoran-krizevci/",
    "https://www.scvz.unizg.hr/studentski-restoran-bjelovar/",
  ];

  const extractDishes = (html: string) => {
    return (
      html
        .split("\n")
        .filter((l) => /^[^\s]+/.test(l))
        .filter((v, i, a) => a.indexOf(v) === i)
        // .sort((a, b) => a.localeCompare(b))
        .map(addNutritionalData)
    );
  };

  const canteens = urls.map(async (url) => {
    const res = await fetch(url);
    const html = await res.text();
    const dom = new JSDOM(html);

    const name = dom.window.document.querySelector("a.active")?.textContent;
    const menu_names = Array.from(
      dom.window.document.querySelectorAll(".jelovnik-content.active h3")
    );

    const menu = menu_names.map((m) => ({
      name: m.textContent!,
      dishes: extractDishes(m.nextElementSibling?.textContent!),
    }));

    return {
      name: `Studentski restoran ${name}`,
      menu,
    };
  });

  return Promise.all(canteens);
}

async function scrape_menu(): Promise<City[]> {
  const [zg, st, vz] = await Promise.all([
    scrape_menu_zg(),
    scrape_menu_st(),
    scrape_menu_vz(),
  ]);

  return [
    { name: "Zagreb", canteens: zg },
    { name: "Split", canteens: st },
    { name: "Varaždin", canteens: vz },
  ];
}

export { scrape_menu, scrape_menu_zg, scrape_menu_st, scrape_menu_vz };
