import React, { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// Hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Enhanced AuthProvider
export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState(null);

	// Persist token to local storage
	useEffect(() => {
		const storedToken = localStorage.getItem("authToken");
		if (storedToken) {
			setToken(storedToken);
			setIsAuthenticated(true);
		}
	}, []);

	// Login function
	const login = ({ token }) => {
		setToken(token);
		setIsAuthenticated(true);
		localStorage.setItem("authToken", token); // Persist token
	};

	// Logout function
	const logout = () => {
		setToken(null);
		setIsAuthenticated(false);
		localStorage.removeItem("authToken"); // Clear token
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
