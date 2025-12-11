"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";
import { useTodoStore } from "../store/todoStore";

export default function Dashboard() {
	const router = useRouter();
	const { user } = useAuthStore();
	const { todos, loading, error, fetchTodos, deleteTodo, updateTodo } = useTodoStore();

	useEffect(() => {
		if (!user) {
			const userJson = sessionStorage.getItem("user");
			if (!userJson) {
				router.push("/login");
			}
		}
	}, [user, router]);

	useEffect(() => {
		if (user) {
			fetchTodos(user.uid);
		}
	}, [user, fetchTodos]);

	const handleDeleteTodo = async (todoId) => {
		if (!user) return;
		try {
			await deleteTodo(user.uid, todoId);
		} catch (err) {
		}
	};

	const handleToggleComplete = async (todo) => {
		if (!user) return;
		try {
			await updateTodo(user.uid, todo.id, { completed: !todo.completed });
		} catch (err) {
		}
	};

	if (!user) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-700">
				<p className="text-white">Loading...</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-blue-700 p-6">
			<div className="max-w-4xl mx-auto">
				<div className="bg-white p-5 rounded-lg shadow-sm">
					<h2 className="text-lg font-semibold text-slate-800 mb-4">
						All Tasks ({todos.length})
					</h2>					{loading ? (
						<div className="text-center py-12 text-slate-400">Loading tasks...</div>
					) : todos.length === 0 ? (
						<div className="text-center py-12 text-slate-400">
							No tasks yet. <a href="/" className="text-blue-600 hover:text-blue-700">Create one</a>
						</div>
					) : (
						<div className="space-y-3">
							{todos.map((todo) => (
								<div
									key={todo.id}
									className={`p-4 border border-slate-200 rounded-md flex items-start justify-between ${
										todo.completed ? "bg-slate-50" : "bg-white"
									}`}
								>
									<div className="flex-1">
										<div className="flex items-center gap-3">
											<input
												type="checkbox"
												checked={todo.completed}
												onChange={() => handleToggleComplete(todo)}
												className="w-5 h-5 text-blue-600 rounded cursor-pointer"
											/>
											<div>
												<p
													className={`font-medium ${
														todo.completed
															? "line-through text-slate-400"
															: "text-slate-800"
													}`}
												>
													{todo.title}
												</p>
												{todo.description && (
													<p className="text-sm text-slate-600">{todo.description}</p>
												)}
												{todo.dueDate && (
													<p className="text-xs text-slate-500">
														Due: {new Date(todo.dueDate).toLocaleDateString()}
													</p>
												)}
											</div>
										</div>
									</div>
									<button
										onClick={() => handleDeleteTodo(todo.id)}
										className="ml-4 px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
									>
										Delete
									</button>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}