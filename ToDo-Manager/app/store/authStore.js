import { create } from "zustand";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getCurrentUser } from "../firebase/mockAuth";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  // Initialize user from sessionStorage on app load
  initializeAuth: () => {
    if (typeof window !== "undefined") {
      try {
        const userJson = sessionStorage.getItem("user");
        if (userJson) {
          const userData = JSON.parse(userJson);
          set({ user: userData });
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Failed to initialize auth:", e);
      }
    }
  },

  // Sign up
  signup: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const userCredential = await createUserWithEmailAndPassword(null, email, password);
      const user = userCredential.user;
      const userData = { email: user.email, uid: user.uid };
      sessionStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData, loading: false });
      return userData;
    } catch (err) {
      const errorMsg = err?.message || "Failed to create account.";
      set({ error: errorMsg, loading: false });
      throw err;
    }
  },

  // Sign in
  signin: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const userCredential = await signInWithEmailAndPassword(null, email, password);
      const user = userCredential.user;
      const userData = { email: user.email, uid: user.uid };
      sessionStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData, loading: false });
      return userData;
    } catch (err) {
      const errorMsg = err?.message || "Failed to sign in.";
      set({ error: errorMsg, loading: false });
      throw err;
    }
  },

  // Sign out
  signout: async () => {
    set({ loading: true, error: null });
    try {
      sessionStorage.removeItem("user");
      set({ user: null, loading: false });
    } catch (err) {
      const errorMsg = err?.message || "Failed to sign out.";
      set({ error: errorMsg, loading: false });
    }
  },

  // Clear error
  clearError: () => set({ error: null }),
}));
