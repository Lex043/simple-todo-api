import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { todoRouter } from "./todo/todo.router";

dotenv.config();
const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRouter);

app.listen(PORT, () => {
    console.log(`Speak lord, your server is listening on port ${PORT}`);
});
