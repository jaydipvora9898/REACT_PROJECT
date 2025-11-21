import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'products';

function loadInitialProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || '[]';
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (e) {
    // ignore write failures
  }
}

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: loadInitialProducts(),
  },
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      state.items.unshift(product);
      saveProducts(state.items);
    },
    setProducts(state, action) {
      state.items = Array.isArray(action.payload) ? action.payload : [];
      saveProducts(state.items);
    },
  },
});

export const { addProduct, setProducts } = productsSlice.actions;
export default productsSlice.reducer;

