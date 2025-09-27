const express = require("express");
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.post("/todos", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        });
        return;
    }

    await todo.update({
        _id: updatePayload.id
    }, {
        completed: true
    });

    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(PORT, (err) => {
    console.log('Listening at port: ', PORT);
});