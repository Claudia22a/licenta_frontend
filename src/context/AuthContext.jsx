import { createContext, useState } from 'react';
import api from '../api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (email, password, passwordConfirmation) => {
    try {
      const res = await api.post(
        '/signup',
        {
          user: {
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      const errors = error.response?.data?.errors || ['Registration failed'];
      throw new Error(errors.join(', '));
    }
  };

  const login = async (email, password) => {
    try {
      const res = await api.post(
        '/login',
        {
          user: { email, password },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      const errors = error.response?.data?.errors || ['Login failed'];
      throw new Error(errors.join(', '));
    }
  };

  const logout = async () => {
    try {
      await api.delete('/logout', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      localStorage.removeItem('token');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error.response?.data || error.message);
      localStorage.removeItem('token'); // Clear token even if request fails
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
