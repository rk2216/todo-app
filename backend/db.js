const mongoose = require("mongoose");

const connectionURL = "mongodb+srv://admin:t8SBKVrNDh0DbiCj@cluster0.en4cb6h.mongodb.net/simple-todo-app"
mongoose.connect(connectionURL);

/*
Todo {
    title: string,
    description: string,
    completed: boolean
}
*/
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo,
}