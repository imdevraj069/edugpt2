import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    gradeLevel?: string;
    school?: string;
}

interface AppState {
    // User State
    user: User | null;
    isAuthenticated: boolean;

    // UI State
    isSidebarOpen: boolean;
    theme: 'dark' | 'light';
    isLoading: boolean;

    // Actions
    setUser: (user: User | null) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    toggleSidebar: () => void;
    setSidebarOpen: (isOpen: boolean) => void;
    setTheme: (theme: 'dark' | 'light') => void;
    setIsLoading: (isLoading: boolean) => void;
    logout: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            // Initial State
            user: null,
            isAuthenticated: false,
            isSidebarOpen: true,
            theme: 'dark',
            isLoading: false,

            // Actions
            setUser: (user) => set({ user, isAuthenticated: !!user }),
            setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
            toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
            setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
            setTheme: (theme) => set({ theme }),
            setIsLoading: (isLoading) => set({ isLoading }),
            logout: () => set({ user: null, isAuthenticated: false }),
        }),
        {
            name: 'techgram-app-store',
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                theme: state.theme,
            }),
        }
    )
);
