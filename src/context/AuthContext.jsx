import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    fullName: 'عادل إمام', // Default name for logged in user
    phone: '',
    email: '',
    country: '',
    agreeToTerms: false
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('client'); // 'client' or 'lawyer'

  const updateUserData = (data) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const clearUserData = () => {
    setUserData({
      fullName: '',
      phone: '',
      email: '',
      country: '',
      agreeToTerms: false
    });
    setIsAuthenticated(false);
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    clearUserData();
    setUserRole('client'); // Reset role to client on logout
  };

  const setRole = (role) => {
    setUserRole(role);
  };

  return (
    <AuthContext.Provider value={{ userData, updateUserData, clearUserData, isAuthenticated, login, logout, userRole, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
