import { createContext, useContext, useState, useEffect } from "react";
import { users } from "../data/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check local storage on mount
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = (credentials) => {
        // Find user from mock data
        const foundUser = users.find(u => u.email === credentials.email && u.password === credentials.password);

        if (foundUser) {
            const userData = { ...foundUser };
            delete userData.password; // Don't store password in state/localstorage

            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(userData));
            return { success: true, role: userData.role };
        }

        // Fallback for demo convenience if they type something else (optional, but stick to strict for now based on prompt "Demo login role system")
        // Prompt says "On login, store role in localStorage".

        return { success: false, message: "Invalid credentials" };
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
