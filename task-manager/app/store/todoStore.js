"use client";

import { create } from "zustand";

const useTodoStore = create((set, get) => ({
  tasks:
    typeof window !== "undefined" && localStorage.getItem("tm_tasks")
      ? JSON.parse(localStorage.getItem("tm_tasks"))
      : [],

  addTask: (title, description) => {
    const id = Date.now();
    const newTask = { id, title, description, completed: false };
    set((state) => {
      const tasks = [newTask, ...state.tasks];
      if (typeof window !== "undefined") localStorage.setItem("tm_tasks", JSON.stringify(tasks));
      return { tasks };
    });
  },

  toggleComplete: (id) => {
    set((state) => {
      const tasks = state.tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
      if (typeof window !== "undefined") localStorage.setItem("tm_tasks", JSON.stringify(tasks));
      return { tasks };
    });
  },

  deleteTask: (id) => {
    set((state) => {
      const tasks = state.tasks.filter((t) => t.id !== id);
      if (typeof window !== "undefined") localStorage.setItem("tm_tasks", JSON.stringify(tasks));
      return { tasks };
    });
  },
}));

export default useTodoStore;
