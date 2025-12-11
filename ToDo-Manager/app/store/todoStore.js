import { create } from "zustand";
import { getTodosForUser, addTodo, updateTodo, deleteTodo } from "../firebase/todoService";

export const useTodoStore = create((set) => ({
  todos: [],
  loading: false,
  error: null,

  // Fetch todos for a user
  fetchTodos: async (userId) => {
    set({ loading: true, error: null });
    try {
      const userTodos = await getTodosForUser(userId);
      set({ todos: userTodos, loading: false });
    } catch (err) {
      const errorMsg = err?.message || "Failed to load tasks.";
      set({ error: errorMsg, loading: false });
      throw err;
    }
  },

  // Add a new todo
  addTodo: async (userId, title, description, dueDate) => {
    set({ error: null });
    try {
      const newTodo = await addTodo(userId, title, description, dueDate);
      set((state) => ({
        todos: [...state.todos, newTodo],
      }));
      return newTodo;
    } catch (err) {
      const errorMsg = err?.message || "Failed to add task.";
      set({ error: errorMsg });
      throw err;
    }
  },

  // Update a todo
  updateTodo: async (userId, todoId, updates) => {
    set({ error: null });
    try {
      const updated = await updateTodo(userId, todoId, updates);
      set((state) => ({
        todos: state.todos.map((t) => (t.id === todoId ? updated : t)),
      }));
      return updated;
    } catch (err) {
      const errorMsg = err?.message || "Failed to update task.";
      set({ error: errorMsg });
      throw err;
    }
  },

  // Delete a todo
  deleteTodo: async (userId, todoId) => {
    set({ error: null });
    try {
      await deleteTodo(userId, todoId);
      set((state) => ({
        todos: state.todos.filter((t) => t.id !== todoId),
      }));
    } catch (err) {
      const errorMsg = err?.message || "Failed to delete task.";
      set({ error: errorMsg });
      throw err;
    }
  },

  // Clear error
  clearError: () => set({ error: null }),

  // Clear todos
  clearTodos: () => set({ todos: [] }),
}));
