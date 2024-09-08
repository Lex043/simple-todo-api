import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient();

export default class TodoService {
    // fetch all todos
    public static async getTodos(): Promise<Todo[]> {
        try {
            const todos = await prisma.todo.findMany();
            return todos;
        } catch (error) {
            console.error("Error fetching todos:", error);
            throw error;
        }
    }

    // fetch todo by id
    public static async getTodo(id: number): Promise<Todo | null> {
        return await prisma.todo.findUnique({
            where: {
                id,
            },
        });
    }

    // create todo
    public static async createTodo(todo: Omit<Todo, "id">): Promise<Todo> {
        return await prisma.todo.create({
            data: {
                ...todo,
            },
        });
    }

    // update todo
    public static async updateTodo(id: number, updateTodo: string, compeleted: boolean): Promise<Todo> {
        return await prisma.todo.update({
            where: {
                id,
            },
            data: {
                todo: updateTodo,
                completed: compeleted,
            },
        });
    }

    // delete todo
    public static async deleteTodo(id: number): Promise<Todo> {
        return await prisma.todo.delete({
            where: {
                id,
            },
        });
    }
}
