"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "../store/authStore";

export default function LoginPage() {
	const router = useRouter();
	const { signin, loading, error, user } = useAuthStore();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [localError, setLocalError] = useState("");

	useEffect(() => {
		if (user) {
			router.push("/");
		}
	}, [user, router]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLocalError("");
		if (!email || !password) {
			setLocalError("Please enter both email and password.");
			return;
		}

		try {
			await signin(email, password);
			router.push("/");
		} catch (err) {
			setLocalError(error || "Failed to sign in.");
		}
	};	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-700 p-6">
			<div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
				<h1 className="text-2xl font-semibold text-slate-800 mb-2">Welcome back</h1>
				<p className="text-sm text-slate-500 mb-6">Sign in to access your dashboard.</p>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-slate-700">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm px-3 py-2"
							placeholder="you@example.com"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-slate-700">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm px-3 py-2"
							placeholder="••••••"
						/>
					</div>

					{localError && <div className="text-sm text-red-500">{localError}</div>}

					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 rounded-md disabled:opacity-50"
						disabled={loading}
					>
						{loading ? "Signing in..." : "Sign in"}
					</button>
				</form>

				<div className="mt-6 text-center text-sm text-slate-500">
					Don't have an account?{' '}
					<Link href="/login/signup" className="text-blue-600 font-medium">Sign up</Link>
				</div>
			</div>
		</div>
	);
}
