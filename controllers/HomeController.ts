import express from "express";
import { TodoModel } from "../models/taskModel";

// list all tasks
export async function listTodo(req: express.Request, res: express.Response) {
    try {
        const tasks = await TodoModel.find({});
        return res.render("Home", {
            tasks_list: tasks,
        });
    } catch (error) {
        console.error(error);
        return res.redirect('/');
    }
}

//add task to list
export async function addTask(req: express.Request, res: express.Response) {
    const task = req.body;
    try {
        const result = await TodoModel.create({
            category: task.category,
            date: new Date(task.date),
            description: task.description,
        });
    } catch (error) {
        console.log("node", error);
    }

    return res.redirect("/");
}

// delete item from list
export async function deleteItems(req: express.Request, res: express.Response) {
    const taskIds = req.body;
    try {
        const result = await TodoModel.deleteMany({ _id: { $in: taskIds } })
    } catch (error) {
        console.log("node", error);
    }

    return res.redirect("/");
}