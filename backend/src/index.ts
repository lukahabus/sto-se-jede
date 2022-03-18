import express from "express";
import cors from "cors";
import memoize from "memoizee";

import { scrape_menu } from "./scrape_menu";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  res.send("Well done!");
});

const memoizedScrapeMenu = memoize(scrape_menu, { maxAge: 15 * 60 * 1000 });

app.get("/scrape_menu", async (req, res) => {
  res.json(await memoizedScrapeMenu());
});

app.listen(3001, () => {
  console.log("The application is listening on port 3001!");
});
