"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext(null);

export function useProfile() {
  return useContext(ProfileContext);
}

export default function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({ name: "", email: "", bio: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("pm_profile");
      if (raw) setProfile(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("pm_profile", JSON.stringify(profile));
    } catch (e) {}
  }, [profile]);

  function createProfile(data) {
    setProfile(data);
  }

  function updateProfile(partial) {
    setProfile((p) => ({ ...p, ...partial }));
  }

  function clearProfile() {
    setProfile({ name: "", email: "", bio: "" });
    try {
      localStorage.removeItem("pm_profile");
    } catch (e) {}
  }

  return (
    <ProfileContext.Provider value={{ profile, createProfile, updateProfile, clearProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
