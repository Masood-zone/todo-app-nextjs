"use client";

import { revalidatePath } from "next/cache";
import { updateTodo } from "../actions/actions";

interface TodoCardProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoCardProps) {
  const toggleTodoCompletion = async () => {
    try {
      const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
      await updateTodo(todo.id, updatedTodo);
      revalidatePath("/todos");
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  return (
    <div
      className={`bg-gray-800 p-4 rounded-lg flex items-center justify-between ${
        todo.isCompleted ? "opacity-50" : ""
      }`}
    >
      {/* Left Section with Checkbox and Task Info */}
      <div className="flex items-center">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={toggleTodoCompletion}
          className="mr-3 form-checkbox h-5 w-5 text-purple-500 rounded-full"
        />

        {/* Task Title and Time */}
        <div className="flex flex-col">
          <h3
            className={`font-medium text-white ${
              todo.isCompleted ? "line-through" : ""
            }`}
          >
            {todo.title}
          </h3>
          <span className="text-gray-400 text-sm">
            {todo.date} At {todo.time}
          </span>
        </div>
      </div>

      {/* Right Section with Category and Flag */}
      <div className="flex items-center space-x-4">
        {/* Category Badge */}
        {todo.category && (
          <span
            className="px-3 py-1 text-xs text-white rounded-full"
            style={{ backgroundColor: todo.category.color }}
          >
            {todo.category.name}
          </span>
        )}

        {/* Flag Icon with Number */}
        <div className="flex items-center space-x-1 text-gray-400 border border-gray-500 rounded-lg px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 3a1 1 0 00-1 1v12a1 1 0 001.447.894l5.383-3.077 5.383 3.077A1 1 0 0016 16V4a1 1 0 00-1.447-.894L9.17 6.07a1 1 0 01-1.342 0L4.553 4.106A1 1 0 004 3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">1</span>
        </div>
      </div>
    </div>
  );
}
