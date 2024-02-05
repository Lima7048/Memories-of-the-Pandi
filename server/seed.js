import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`CREATE TABLE IF NOT EXISTS memories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    message TEXT,
    date INTEGER,
    location TEXT,
    picture TEXT
)`);
db.exec(`
INSERT into memories (username, message, date, location, picture)
VALUES
('TOM', 'HELLO', 5, 'norwich', 'https://posters.movieposterdb.com/22_10/2004/410519/l_the-matrix-recalibrated-movie-poster_74175b37.jpg')
`)