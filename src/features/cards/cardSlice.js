import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [
    { id: 1, title: 'Card 1', category: 'Category A' },
    { id: 2, title: 'Card 2', category: 'Category B' },
    { id: 3, title: 'Card 3', category: 'Category A' },
  ],
  filter: 'All',
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    deleteCard: (state, action) => {
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { deleteCard, setFilter } = cardSlice.actions;
export default cardSlice.reducer;
