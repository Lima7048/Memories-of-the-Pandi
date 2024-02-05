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












 

app.post (`/memories`, (req, res) =>{
  try{
    const username = req.body.username
    const message = req.body.message
    const date = req.body.date
    const location = req.body.location
    const picture = req.body.picture 

    const newMemories = db.prepare(`INSERT INTO memories (username, message, date, location, picture) VALUES(?,?,?,?,?)`).run
    (username,message,date,location,picture)
    res.status(200).json(newMemories)
  } catch(err) {
    res.status(500).json({error : err})
  }

})