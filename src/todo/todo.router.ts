import express from "express";
import TodoService from "./todo.service";
import { createValidator } from "./todo.validator";

export const todoRouter = express.Router();

// get all the todos
todoRouter.get("/", async (req, res) => {
    try {
        const todos = await TodoService.getTodos();
        res.status(200).json({
            success: true,
            message: "Todos fetched.",
            code: 200,
            data: todos,
        });
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
});

// get todo
todoRouter.get("/:id", async (req, res) => {
    try {
        const todo = await TodoService.getTodo(Number(req.params.id));
        res.status(200).json({
            success: true,
            message: "Todo fetched.",
            code: 200,
            data: todo,
        });
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
});

// create todo
todoRouter.post("/", createValidator, async (req, res) => {
    try {
        const todo = await TodoService.createTodo(req.body);
        res.status(200).json({
            success: true,
            message: "Todo created Successfully.",
            code: 201,
            data: todo,
        });
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
});

// update todo
todoRouter.put("/:id", createValidator, async (req, res) => {
    const { todo, completed } = req.body;
    try {
        const data = await TodoService.updateTodo(Number(req.params.id), todo, completed);
        res.status(200).json({
            success: true,
            message: "Todo updated Successfully.",
            code: 200,
            data,
        });
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
});

// delete todo
todoRouter.delete("/:id", async (req, res) => {
    try {
        const todo = await TodoService.deleteTodo(Number(req.params.id));
        res.status(200).json({
            success: true,
            message: "Todo deleted.",
            code: 201,
            data: todo,
        });
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
});
