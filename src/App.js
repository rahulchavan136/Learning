import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetData  from './getAPIData/GetData';
import Parent from './components/Parent'
 
// import ProductChildToParent from './productCToP/ProductChildToParent';
// import Header from './lazyLoading/Header';
// import LazyComponent from './lazyLoading/LazyComponent';
// import { MyContextMainComponent } from './components/context/MyContextMainComponent';
// import { ReducerMainComponent } from './components/useReducersComponent/ReducerMainComponent';
// import { MainReduxComponent } from './features/cards/MainReduxComponent';
// import { Product } from './productPToC/Product';

const App = () => {

  // const products = [
  //   {productID:1,productName :"Product-1",releaseType:"New",discount:60},
  //   {productID:2,productName :"Product-2",releaseType:"old",discount:40},
  //   {productID:3,productName :"Product-3",releaseType:"old",discount:70},
  //   {productID:4,productName :"Product-4",releaseType:"New",discount:80},
  // ]

  return (
    <>
    <Parent />
      <GetData />
      {/* <LazyComponent />  issue with lazy loading component */}
      {/* <ProductChildToParent /> */}
      {/* <Product products ={products}/> */}
      {/* <MainReduxComponent /> */}
      {/* <MyContextMainComponent /> */}
      {/* <ReducerMainComponent /> */}
    </>
  );
};

export default App;
