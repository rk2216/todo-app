const express = require("express");
const {todo, updateTodo} = require("/types");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos", (req, res) => {

});

app.post("/todos", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = todo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        });
        return;
    }

});

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = todo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        });
        return;
    }
    
});

app.listen(PORT, (err) => {
    console.log('Listening at port: ', PORT);
});