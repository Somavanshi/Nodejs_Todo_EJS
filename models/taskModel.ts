import mongoose from "mongoose";

// created schema for todo list
const todoSchema = new mongoose.Schema({
    description: {
        type: "String",
        required: true
    },
    category: {
        type: "String",
        required: true
    },
    date: {
        type: "Date",
        required: false
    },
    isChecked: {
        type: "Boolean",
        required: false,
        default: false
    }
});

//created model for todo list
export const TodoModel = mongoose.model('Todo', todoSchema);