// import mysql from "mysql2/promise"
var mysql = require("mysql")
var express = require("express")

const connection = mysql.createPool({
    host: 'localhost',
    // port: '3306',
    user: 'root',
    password: 'password',
    database: 'mosaic'
})

const app = express()
const base_url = "/api/v1/mosaic"

connection.getConnection((err, connection) => {
    if (err) throw console.error(err)
    console.log("Connected")
})

app.get(base_url + '/users/:userName', (req, res) => {
    connection.getConnection((err, connection) => {
        // connection.query(`SELECT * FROM mosaic.users WHERE user_name = '${req.params.userName}'`, (error, results, fields) => {
            connection.query(`SELECT * FROM mosaic.users WHERE user_name = 'Clay'`, (error, results, fields) => {
            if (error) throw error;
            res.send(results)
        });
    });
});

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

// TODO: Encrypt password
app.get(base_url + '/users/loginUser/:user'), (req, res) => {
    const { userName, password } = req.params.user;
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM mosaic.users WHERE user_name = '${userName}' AND password = '${password}'`),
        (error, results, fields) => {
            if (error) throw error;

            // TODO: Create context to store user in.
            res.send(results)
        }
    })
}

app.get(base_url + "/users/createUser/:user", (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`INSERT INTO mosaic.users ('user_name', 'password') VALUES('${req.params.user.userName}', '${req.params.user.password}')`,
        (error, results, fields) => {
            if (error) throw error;
            res.set(results)
        })
    })
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})