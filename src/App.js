import React, { useReducer } from 'react';
 import Filter from './components/Filter';
import './App.css'; 
import { initialState, reducer } from './components/reducer';
import CardComponent from './components/CardComponent';
import { Container } from 'react-bootstrap';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredCards = state.filter === 'All' ? state.cards : state.cards.filter(card => card.category === state.filter);
  console.log(filteredCards);

  return (
    <Container>
      <h1>Card Management</h1>
      <Filter setFilter={(filter) => dispatch({ type: 'SET_FILTER', payload: filter })} /><br />
      <div className="card-list">
        {filteredCards.map(card => (
          <CardComponent key={card.id} card={card} onDelete={(id) => dispatch({ type: 'DELETE_CARD', payload: id })} />
        ))}
      </div>
    </Container>
  );
};

export default App;
