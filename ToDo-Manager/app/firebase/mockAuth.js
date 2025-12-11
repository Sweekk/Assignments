const USERS_KEY = "mock_firebase_users";
const CURRENT_USER_KEY = "mock_firebase_current_user";

function getUsers() {
  if (typeof window === "undefined") return {};
  try {
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : {};
  } catch (e) {
    console.warn("Failed to read users from localStorage", e);
    return {};
  }
}

function saveUsers(users) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (e) {
    console.warn("Failed to save users to localStorage", e);
  }
}

export async function createUserWithEmailAndPassword(auth, email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!email || typeof email !== "string") {
          const err = new Error("Invalid email provided");
          console.error("Email validation failed:", email);
          reject({
            code: "auth/invalid-email",
            message: "Firebase: Error (auth/invalid-email).",
            originalError: err,
          });
          return;
        }

        const users = getUsers();

        if (users[email]) {
          console.warn("User already exists:", email);
          reject({
            code: "auth/email-already-in-use",
            message: "Firebase: Error (auth/email-already-in-use).",
          });
          return;
        }

        // Validate password length
        if (!password || password.length < 6) {
          console.warn("Password too weak:", password?.length || 0);
          reject({
            code: "auth/weak-password",
            message:
              "Firebase: Password should be at least 6 characters (auth/weak-password).",
          });
          return;
        }

        // Create new user
        const uid = `user_${Date.now()}`;
        users[email] = {
          uid,
          email,
          password, // In real Firebase, passwords are hashed. This is just for demo.
          createdAt: new Date().toISOString(),
        };

        saveUsers(users);

        // Simulate setting current user
        const userCredential = {
          user: {
            uid,
            email,
            createdAt: users[email].createdAt,
          },
        };

        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userCredential.user));
        console.log("User created successfully:", email);
        resolve(userCredential);
      } catch (e) {
        console.error("Unexpected error in createUserWithEmailAndPassword:", e);
        reject({
          code: "auth/internal-error",
          message: "An unexpected error occurred: " + e.message,
        });
      }
    }, 600);
  });
}

export async function signInWithEmailAndPassword(auth, email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!email || typeof email !== "string") {
          console.error("Email validation failed:", email);
          reject({
            code: "auth/invalid-email",
            message: "Firebase: Error (auth/invalid-email).",
          });
          return;
        }

        const users = getUsers();
        const user = users[email];

        if (!user) {
          console.warn("User not found:", email);
          reject({
            code: "auth/user-not-found",
            message: "Firebase: Error (auth/user-not-found).",
          });
          return;
        }

        // Check password
        if (user.password !== password) {
          console.warn("Wrong password for user:", email);
          reject({
            code: "auth/wrong-password",
            message: "Firebase: Error (auth/wrong-password).",
          });
          return;
        }

        // Success
        const userCredential = {
          user: {
            uid: user.uid,
            email: user.email,
            createdAt: user.createdAt,
          },
        };

        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userCredential.user));
        console.log("User signed in successfully:", email);
        resolve(userCredential);
      } catch (e) {
        console.error("Unexpected error in signInWithEmailAndPassword:", e);
        reject({
          code: "auth/internal-error",
          message: "An unexpected error occurred: " + e.message,
        });
      }
    }, 600);
  });
}

export async function signOut(auth) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem(CURRENT_USER_KEY);
      resolve();
    }, 300);
  });
}

export function getCurrentUser() {
  if (typeof window === "undefined") return null;
  try {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  } catch (e) {
    console.warn("Failed to read current user", e);
    return null;
  }
}
