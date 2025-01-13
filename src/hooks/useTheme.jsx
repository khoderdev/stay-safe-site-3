// useTheme.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => useContext(ThemeContext);
