import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const BrandA = () => {
  const { theme } = useContext(ThemeContext);
  return <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>Brand A Component</div>;
};

export default BrandA;
