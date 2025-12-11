"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";

export default function AuthInitializer({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
    setIsInitialized(true);
  }, [initializeAuth]);

  // Don't render children until auth is initialized to avoid hydration mismatch
  if (!isInitialized) {
    return null;
  }

  return children;
}
