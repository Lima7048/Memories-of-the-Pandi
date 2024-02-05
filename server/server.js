import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
const app = express();
app.use(express.json());
app.use(cors());
const db = Database("database.db");

app.listen("0001", () => {
  console.log("port is working");
});

app.get("/log", (req, res) => {
  try {
    let stories = db.prepare(`SELECT * FROM memories`).all()
    res.status(200).json(stories)
    return
  }
  catch (err) {
    res.status(500).json(err)
  }
})