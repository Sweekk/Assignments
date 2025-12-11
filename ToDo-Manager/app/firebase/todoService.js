const TODOS_KEY = "mock_firestore_todos";

export async function getTodosForUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        if (typeof window === "undefined") {
          resolve([]);
          return;
        }

        const todosJson = localStorage.getItem(TODOS_KEY);
        const allTodos = todosJson ? JSON.parse(todosJson) : {};
        const userTodos = allTodos[userId] || [];

        console.log("Fetched todos for user:", userId, userTodos);
        resolve(userTodos);
      } catch (e) {
        console.error("Failed to fetch todos:", e);
        resolve([]);
      }
    }, 300);
  });
}

export async function addTodo(userId, title, description, dueDate) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (typeof window === "undefined") {
          reject(new Error("Cannot add todo on server side"));
          return;
        }

        // Validate inputs
        if (!title || typeof title !== "string" || title.trim() === "") {
          reject(new Error("Title is required and must be a non-empty string"));
          return;
        }

        const todosJson = localStorage.getItem(TODOS_KEY);
        const allTodos = todosJson ? JSON.parse(todosJson) : {};

        if (!allTodos[userId]) {
          allTodos[userId] = [];
        }

        const newTodo = {
          id: `todo_${Date.now()}`,
          userId,
          title: title.trim(),
          description: description?.trim() || "",
          dueDate: dueDate || null,
          completed: false,
          createdAt: new Date().toISOString(),
        };

        allTodos[userId].push(newTodo);
        localStorage.setItem(TODOS_KEY, JSON.stringify(allTodos));

        console.log("Todo added successfully:", newTodo);
        resolve(newTodo);
      } catch (e) {
        console.error("Failed to add todo:", e);
        reject(e);
      }
    }, 400);
  });
}

export async function updateTodo(userId, todoId, updates) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (typeof window === "undefined") {
          reject(new Error("Cannot update todo on server side"));
          return;
        }

        const todosJson = localStorage.getItem(TODOS_KEY);
        const allTodos = todosJson ? JSON.parse(todosJson) : {};

        if (!allTodos[userId]) {
          reject(new Error("User has no todos"));
          return;
        }

        const todoIndex = allTodos[userId].findIndex((t) => t.id === todoId);
        if (todoIndex === -1) {
          reject(new Error("Todo not found"));
          return;
        }

        allTodos[userId][todoIndex] = {
          ...allTodos[userId][todoIndex],
          ...updates,
          id: todoId,
          userId,
        };

        localStorage.setItem(TODOS_KEY, JSON.stringify(allTodos));

        console.log("Todo updated successfully:", allTodos[userId][todoIndex]);
        resolve(allTodos[userId][todoIndex]);
      } catch (e) {
        console.error("Failed to update todo:", e);
        reject(e);
      }
    }, 300);
  });
}

export async function deleteTodo(userId, todoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (typeof window === "undefined") {
          reject(new Error("Cannot delete todo on server side"));
          return;
        }

        const todosJson = localStorage.getItem(TODOS_KEY);
        const allTodos = todosJson ? JSON.parse(todosJson) : {};

        if (!allTodos[userId]) {
          reject(new Error("User has no todos"));
          return;
        }

        const initialLength = allTodos[userId].length;
        allTodos[userId] = allTodos[userId].filter((t) => t.id !== todoId);

        if (allTodos[userId].length === initialLength) {
          reject(new Error("Todo not found"));
          return;
        }

        localStorage.setItem(TODOS_KEY, JSON.stringify(allTodos));

        console.log("Todo deleted successfully:", todoId);
        resolve({ id: todoId });
      } catch (e) {
        console.error("Failed to delete todo:", e);
        reject(e);
      }
    }, 300);
  });
}
