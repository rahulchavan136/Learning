import React from 'react'; 
import './App.css';
import { MyContextMainComponent } from './components/context/MyContextMainComponent';
import { ReducerMainComponent } from './components/useReducersComponent/ReducerMainComponent';
import Filter from './features/cards/Filter';
import CardList from './features/cards/CardList';



const App = () => {
  return (
    <>
    <div>
      <Filter />
      <hr />
      <CardList />
    </div>
    <hr />
   <MyContextMainComponent /> 
   <hr />
   <ReducerMainComponent />
    </>
  );
};

export default App;
