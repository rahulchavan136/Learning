import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const BrandC = () => {
  const { theme } = useContext(ThemeContext);
  return <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>Brand C Component</div>;
};

export default BrandC;
