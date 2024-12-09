import { create } from "zustand";

interface AuthState {
  loggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  // อ่านค่าจาก Cookie
  const getInitialLoggedIn = () => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("loggedIn="));
    return cookie?.split("=")[1] === "true" || false;
  };

  return {
    loggedIn: getInitialLoggedIn(), // ตั้งค่าเริ่มต้นจาก Cookie
    setLoggedIn: (status) => {
      if (status) {
        document.cookie = "loggedIn=true; path=/;";
      } else {
        document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
      set({ loggedIn: status });
    },
    logout: () => {
      document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      set({ loggedIn: false });
    },
  };
});
