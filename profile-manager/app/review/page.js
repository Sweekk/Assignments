"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "../profile/ProfileProvider";
import Link from "next/link";

export default function ReviewPage() {
  const { profile, updateProfile } = useProfile();
  const [form, setForm] = useState(profile || { name: "", email: "", bio: "" });
  const router = useRouter();

  useEffect(() => setForm(profile || { name: "", email: "", bio: "" }), [profile]);

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function save() {
    updateProfile(form);
    router.push("/final");
  }

  return (
    <main style={{ maxWidth: 820, margin: "48px auto", padding: 20 }}>
      <h1 style={{ marginBottom: 6 }}>2. Review & Edit</h1>
      <p style={{ color: "#6b7280", marginTop: 0 }}>Make any changes to your profile before finalizing.</p>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        <label style={{ fontWeight: 600 }}>Full name</label>
        <input value={form.name} onChange={(e) => handleChange("name", e.target.value)} style={{ padding: 10, borderRadius: 8, border: "1px solid #e6e9ef" }} />

        <label style={{ fontWeight: 600 }}>Email</label>
        <input value={form.email} onChange={(e) => handleChange("email", e.target.value)} style={{ padding: 10, borderRadius: 8, border: "1px solid #e6e9ef" }} />

        <label style={{ fontWeight: 600 }}>Bio</label>
        <textarea value={form.bio} onChange={(e) => handleChange("bio", e.target.value)} style={{ padding: 10, borderRadius: 8, border: "1px solid #e6e9ef", minHeight: 100 }} />

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={save} style={{ padding: "10px 14px", background: "#059669", color: "white", borderRadius: 8, border: "none" }}>Save & Finalize</button>
          <Link href="/"><button style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #e6e9ef" }}>Back</button></Link>
        </div>
      </div>
    </main>
  );
}
