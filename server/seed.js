import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`CREATE TABLE IF NOT EXITS memories (
    id INTEGER PRIMARY KEY AUTOINCREMENT
    username TEXT,
    message TEXT,
    date INTEGER,
    location TEXT,
    picture TEXT,
)`);
