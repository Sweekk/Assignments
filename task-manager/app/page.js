"use client";

import { useState } from "react";
import useTodoStore from "./store/todoStore";
import Link from "next/link";
import styles from "./styles/ui.module.css";

export default function Page() {
  const addTask = useTodoStore((s) => s.addTask);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim(), description.trim());
    setTitle("");
    setDescription("");
  }

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Create a New Task</h1>
          <div className={styles.subtle}>Quickly add tasks and manage them on the Tasks page.</div>
        </div>
        <div>
          <Link href="/Tasks">
            <button className={`${styles.btn} ${styles.ghost}`}>View Tasks</button>
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <input
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title — e.g. Design homepage hero"
          />
        </div>

        <div>
          <textarea
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add context, checklist, or notes (optional)"
          />
        </div>

        <div className={styles.actions}>
          <button type="submit" className={`${styles.btn} ${styles.primary}`}>Add Task</button>
          <Link href="/Tasks">
            <button type="button" className={`${styles.btn} ${styles.ghost}`}>Open Tasks</button>
          </Link>
        </div>
      </form>

      <div className={styles.divider} />

      <p className={styles.subtle}>Tip: Use the Tasks view to filter, complete, and delete tasks.</p>
    </main>
  );
}
