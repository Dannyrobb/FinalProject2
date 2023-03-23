const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
app.use(cors());
app.use(express.json());

const db = require("knex")({
  client: "pg",
  connection: {
    host: "rogue.db.elephantsql.com",
    user: "qozobhvr",
    password: "bRDbgBG8-m3k-nqXKx6m8MaIYhpC0MlF",
    database: "qozobhvr",
    port: "5432",
  },
});
app.get("/", async (req, res) => {
  const info = await db("users").select();
  res.json(info);
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
