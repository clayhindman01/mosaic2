const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const connection = mysql.createPool({
    host: 'mosaic-mysql-server.mysql.database.azure.com',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'mosaic-dev-db',
})

const app = express()
const base_url = "/api/v1/mosaic"
const jsonParser = bodyParser.json();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

connection.getConnection((err, connection) => {
    if (err) throw console.error(err)
    console.log("Connected")
})

app.post(base_url + "/addUser", jsonParser, (req, res) => {
    connection.getConnection((err, connection) => {
        console.log(req.body)
        connection.query(
            `INSERT INTO users (user_id, user_email, user_name) VALUES ('${req.body.user_id}', '${req.body.user_email}', '${req.body.user_name}')`,
            (error, results) => {
                if (error) throw error;
                res.send(results)
            }
        )
    })
}) 

app.get(base_url + '/searchUser/:user_name', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM users WHERE user_name LIKE '%${req.params.user_name}%'`, (error, results, fields) => {
            if (error) throw error;
            res.send(results)
            console.log(results)
        });
    });
});

app.get(base_url + "/getUser", jsonParser, (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM users WHERE user_name='${req.body.user_name}'`, (error, results, fields) => {
            if (error) throw error;
            res.send(results)
            console.log(results)
        })
    })
})

app.get(base_url + "/tile/:tileId", (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM mosaic.tile WHERE tile_id = ${req.params.tileId}`,
        (error, results, fields) => {
            if (error) throw error;
            res.send(results)
        })
    })
})

app.get(base_url + "/mosaics/:mosaicId", (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM mosaic.mosaic WHERE mosaic_id = ${req.params.mosaicId}`,
        (error, results, fields) => {
            if (error) throw error;
            res.send(results)
        })
    })
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})