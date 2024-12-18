// Importy i deklaracje

const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



// Tworzenie instancji Express

const app = express();
app.use(cors());
app.use(bodyParser.json());



// Konfiguracja Postgresqla

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pojazdy',
    password: 'postgres',
    port: 5432
});



// Tworzenie tabeli pojazdów

pool.query(
    `CREATE TABLE IF NOT EXISTS pojazdy(
    id SERIAL PRIMARY KEY,
    marka VARCHAR(30),
    model VARCHAR(30),
    numer_rejestracyjny VARCHAR(10),
    wlasciciel VARCHAR(100),
    email VARCHAR(128));`
);



// Pobieranie

app.get('/pojazdy', async(req, res) => {
    const {rows} = await pool.query('SELECT * FROM pojazdy;');
    res.json(rows);
});



// Wstawianie

app.post('/pojazdy', async(req, res) => {
    const {marka, model, numer_rejestracyjny, wlasciciel, emali} = req.body;
    await pool.query(`insert into pojazdy (marka, model, numer_rejestracyjny, wlasciciel, email)
                        values($1, $2, $3, $4, $5);`,[marka, model, numer_rejestracyjny, wlasciciel, emali]);
    res.status(201).send("Dodano pojazd.")
});



// Uruchamianie serwera

app.listen(3000, () =>{
    console.log("Serwer działa na http://localhost:3000");
});