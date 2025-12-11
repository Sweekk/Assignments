"use client";

import { useState } from "react";
import useTodoStore from "../store/todoStore";
import Link from "next/link";
import styles from "../styles/ui.module.css";

export default function TasksPage() {
  const tasks = useTodoStore((s) => s.tasks);
  const toggleComplete = useTodoStore((s) => s.toggleComplete);
  const deleteTask = useTodoStore((s) => s.deleteTask);
  const [filter, setFilter] = useState("all"); // all | pending | completed

  const filtered = tasks.filter((t) => {
    if (filter === "all") return true;
    if (filter === "completed") return t.completed;
    return !t.completed;
  });

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Tasks</h1>
        <Link href="/">
          <button className={`${styles.btn} ${styles.ghost}`}>Add Task</button>
        </Link>
      </div>

      <div className={styles.filters}>
        <button className={`${styles.filterBtn} ${filter === "all" ? 'active' : ''}`} onClick={() => setFilter("all")}>All ({tasks.length})</button>
        <button className={`${styles.filterBtn} ${filter === "pending" ? 'active' : ''}`} onClick={() => setFilter("pending")}>Pending ({tasks.filter((t) => !t.completed).length})</button>
        <button className={`${styles.filterBtn} ${filter === "completed" ? 'active' : ''}`} onClick={() => setFilter("completed")}>Completed ({tasks.filter((t) => t.completed).length})</button>

        <div style={{ width: 1, height: 24, background: "#eef2f7", margin: "0 8px" }} />

        <button className={`${styles.filterBtn} ${filter === "pending" ? 'active' : ''}`} onClick={() => setFilter((f) => (f === "pending" ? "all" : "pending"))}>
          {filter === "pending" ? "Showing: Pending" : "Only Pending"}
        </button>

        <button className={`${styles.filterBtn} ${filter === "completed" ? 'active' : ''}`} onClick={() => setFilter((f) => (f === "completed" ? "all" : "completed"))}>
          {filter === "completed" ? "Showing: Completed" : "Only Completed"}
        </button>
      </div>

      <div className={styles.list}>
        {filtered.length === 0 && <div className={styles.subtle}>No tasks to show.</div>}
        {filtered.map((t) => (
          <div key={t.id} className={styles.card}>
            <div>
              <div className={`${styles.cardTitle} ${t.completed ? styles.completed : ''}`}>{t.title}</div>
              {t.description && <div className={styles.cardMeta}>{t.description}</div>}
            </div>

            <div className={styles.cardActions}>
              <button className={styles.btn} onClick={() => toggleComplete(t.id)}>{t.completed ? 'Undo' : 'Complete'}</button>
              <button className={styles.btn} style={{ background: '#fff', border: '1px solid #fde2e2', color: '#b91c1c' }} onClick={() => deleteTask(t.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
