"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./store/authStore";
import { useTodoStore } from "./store/todoStore";

export default function Page() {
	const router = useRouter();
	const { user } = useAuthStore();
	const { addTodo, error: todoError, clearError } = useTodoStore();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");

	useEffect(() => {
		if (!user) {
			const userJson = sessionStorage.getItem("user");
			if (!userJson) {
				router.push("/login");
			}
		}
	}, [user, router]);

	const handleAddTask = async (e) => {
		e.preventDefault();
		clearError();

		if (!title.trim()) {
			return;
		}

		if (!user || !user.uid) {
			return;
		}

		setLoading(true);

		try {
			await addTodo(user.uid, title, description, dueDate);
			setSuccess("Task added successfully!");
			setTitle("");
			setDescription("");
			setDueDate("");
			setTimeout(() => setSuccess(""), 3000);
		} catch (err) {
		} finally {
			setLoading(false);
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
			<div className="max-w-3xl mx-auto ml-[40%]">
				<header className="mb-6">
					<h1 className="text-3xl font-extrabold text-slate-800 -ml-2"> Todo — Manager</h1>
					<p className="text-sm text-slate-600">Welcome, {user.email}</p>
					<a
						href="/dashboard"
						className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium"
					>
						View All Tasks
					</a>
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-1 bg-white p-5 rounded-lg shadow-sm">
						<form onSubmit={handleAddTask} className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-slate-700">Title</label>
								<input
									type="text"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 bg-white text-slate-900"
									placeholder="e.g. Buy groceries"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-700">Description</label>
								<textarea
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									rows={3}
									className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 bg-white text-slate-900"
									placeholder="Optional description"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-700">Due Date</label>
								<input
									type="date"
									value={dueDate}
									onChange={(e) => setDueDate(e.target.value)}
									className="mt-1 block w-full border border-slate-200 rounded-md px-2 py-2 bg-white text-slate-900"
								/>
							</div>

							{todoError && <div className="text-sm text-red-600">{todoError}</div>}
							{success && <div className="text-sm text-green-600">{success}</div>}

							<button
								type="submit"
								disabled={loading}
								className="mt-5 w-full bg-green-500 text-white px-4 py-2 rounded-md transition hover:bg-green-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-400 font-medium"
							>
								{loading ? "Adding..." : "Add Task"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
