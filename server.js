const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const connection = mysql.createPool({
    host: 'localhost',
    // port: '3306',
    user: 'root',
    password: 'password',
    database: 'mosaic'
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

app.post(base_url + "/users", jsonParser, (req, res) => {
    connection.getConnection((err, connection) => {
        console.log(req.body)
        connection.query(
            `INSERT INTO mosaic.users (user_name, password, userId) VALUES ('${req.body.user_name}', '${req.body.password}', '${req.body.userId}')`,
            (error, results) => {
                if (error) throw error;
                res.send(results)
            }
        )
    })
}) 


app.get(base_url + '/users/:userName', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query(`SELECT * FROM mosaic.users WHERE user_name LIKE '%${req.params.userName}%'`, (error, results, fields) => {
            if (error) throw error;
            res.send(results)
            console.log(results)
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