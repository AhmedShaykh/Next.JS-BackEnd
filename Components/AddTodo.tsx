"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NewTodos } from "@/lib/drizzle";
import { useRouter } from "next/navigation";

const AddTodo = () => {

    const [task, setTask] = useState<NewTodos | null>(null);

    // const { refresh } = useRouter();

    const handleSubmit = async () => {

        try {

            if (task) {

                const res = await fetch("/api/todos", {
                    method: "POST",
                    body: JSON.stringify({ task: task.task })
                });

                console.log(res.ok);

                // refresh();

            }

        } catch (error) {

            console.log("error");

        }
    };

    return (
        <>
            <form className='w-full flex gap-x-3'>
                <input
                    onChange={(e) => setTask({ task: e.target.value })}
                    type="text"
                    className="text-[1rem] font-medium rounded-full w-full py-3 px-5 border focus:outline-blue-900"
                />
                <button
                    onClick={handleSubmit}
                    // type="submit"
                    className="p-4 shrink-0 rounded-full bg-gradient-to-b from-gray-900 to-blue-900"
                >
                    <Image src={"/vector.png"} width={20} height={20} alt='vector' />
                </button>
            </form>
        </>
    )
};

export default AddTodo;