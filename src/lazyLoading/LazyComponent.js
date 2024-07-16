import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

const Home = lazy(() => import('./Home'));
const BrandA = lazy(() => import('./BrandA'));
const BrandB = lazy(() => import('./BrandB'));
const BrandC = lazy(() => import('./BrandC'));

const LazyComponent = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicines/brandA" element={<BrandA />} />
            <Route path="/medicines/brandB" element={<BrandB />} />
            <Route path="/medicines/brandC" element={<BrandC />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default LazyComponent;
