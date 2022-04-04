import express from "express";
import cors from "cors";
import nunjucks from "nunjucks";
import memoize from "memoizee";

import { scrape_menu } from "./scrape_menu";

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

/*** web handlers ****************************/

app.get("/", async (req, res) => {
  res.render("index.njk", { menu: await cachedMenu() });
});

/*** api handlers ****************************/

app.get("/api/menu", async (req, res) => {
  res.json(await cachedMenu());
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
