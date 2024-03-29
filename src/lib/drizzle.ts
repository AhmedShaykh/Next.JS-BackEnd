import {
    boolean,
    pgTable,
    serial,
    varchar
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const todosTable = pgTable("todos", {
    id: serial("id").primaryKey(),
    task: varchar("task", {
        length: 255
    }).notNull(),
    isdone: boolean("isdone")
});

export type Todos = InferModel<typeof todosTable>;

export type NewTodos = InferModel<typeof todosTable, "insert">;

export const db = drizzle(sql);