const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const { connect } = require("http2");

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

// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

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

// Search User Endpoint
app.get(base_url + '/searchUser/:user_name', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM users WHERE user_name LIKE '%${req.params.user_name}%'`, (error, results, fields) => {
            if (error) throw error;
            res.send(results)
            console.log(results)
        });
    });
});

// 
app.get(base_url + "/getUser/:uid", (req, res) => {
    let data = {};
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM users WHERE user_id='${req.params.uid}'`, (error, results, fields) => {
            if (error) throw error;
            res.json(results)
            console.log(results)
        })
    })
})

app.get(base_url + "/getTiles/:user_id", (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM tiles WHERE user_id ='${req.params.user_id}'`,
        (error, results, fields) => {
            if (error) throw error;
            res.send(results)
        })
    })
})

app.post(base_url + "/addTile/:uid", jsonParser, (req, res) => {
    connection.getConnection((error, connection) => {
        connection.query(`INSERT INTO tiles (user_id, tile_image) VALUES ('${req.params.uid}', '${req.body.data}')`,
        (error, results, fields) => {
            if (error) throw error;
            res.send(results)
            console.log(results)
        })
    })
})

app.get(base_url + "/mosaics/:mosaicId", (req, res) => {
    console.log(req.body)
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