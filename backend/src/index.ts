import express from "express";
import cors from "cors";
import nunjucks from "nunjucks";
import memoize from "memoizee";

import {
  scrape_menu,
  scrape_menu_st,
  scrape_menu_zg,
  scrape_menu_vz,
} from "./scrape_menu";

const app = express();

app.use(cors());
app.use(express.static("src/static"));

nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

const cachedMenu = memoize(scrape_menu, {
  maxAge: 15 * 60 * 1000,
  preFetch: true,
});

app.get("/api/menu", async (req, res) => {
  res.json(await cachedMenu());
});

app.get("/api/menu/st", async (req, res) => {
  res.json(await scrape_menu_st());
});

app.get("/api/menu/zg", async (req, res) => {
  res.json(await scrape_menu_zg());
});

app.get("/api/menu/vz", async (req, res) => {
  res.json(await scrape_menu_vz());
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001!");
});
