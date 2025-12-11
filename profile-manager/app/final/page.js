"use client";

import { useProfile } from "../profile/ProfileProvider";
import Link from "next/link";

export default function FinalPage() {
  const { profile, clearProfile } = useProfile();

  return (
    <main style={{ maxWidth: 820, margin: "48px auto", padding: 20 }}>
      <h1 style={{ marginBottom: 6 }}>3. Final Profile</h1>
      <p style={{ color: "#6b7280", marginTop: 0 }}>This is your finalized profile. You can go back and edit or clear it.</p>

      <div style={{ marginTop: 18, padding: 16, border: "1px solid #eef2f7", borderRadius: 10, background: "#fff" }}>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{profile.name || "—"}</div>
          <div style={{ color: "#6b7280" }}>{profile.email || "—"}</div>
        </div>

        <div style={{ marginTop: 8, color: "#374151" }}>{profile.bio || "No bio provided."}</div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        <Link href="/review"><button style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #e6e9ef" }}>Edit</button></Link>
        <button onClick={clearProfile} style={{ padding: "10px 14px", background: "#ef4444", color: "white", borderRadius: 8, border: "none" }}>Clear Profile</button>
      </div>
    </main>
  );
}
