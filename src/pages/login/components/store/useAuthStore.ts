import { create } from "zustand";

interface AuthState {
    loggedIn: boolean;
    setLoggedIn: (status: boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    loggedIn: false,
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
}));
