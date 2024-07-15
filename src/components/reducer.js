export const initialState = {
    cards: [
      { id: 1, title: 'Card 1', category: 'Category A' },
      { id: 2, title: 'Card 2', category: 'Category B' },
      { id: 3, title: 'Card 3', category: 'Category A' },
    ],
    filter: 'All'
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'DELETE_CARD':
        return {
          ...state,
          cards: state.cards.filter(card => card.id !== action.payload)
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
      default:
        return state;
    }
  };
  