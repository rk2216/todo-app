const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos", (req, res) => {

});

app.post("/todos", (req, res) => {

});

app.put("/completed", (req, res) => {

});

app.listen(PORT, (err) => {
    console.log('Listening at port: ', PORT);
});