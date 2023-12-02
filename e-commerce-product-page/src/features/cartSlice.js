import { createSlice, current } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: {
      reducer(state, action) {
        if (action.payload.quantity !== 0) {
          const exists = state.value.find(
            (item) => item.id === action.payload.id
          );
          if (exists) {
            exists.quantity += action.payload.quantity;
            exists.totalSum += action.payload.totalSum;
          } else {
            state.value.push(action.payload);
          }
        }
      },
      prepare({ productName, quantity, id, price }) {
        return {
          payload: {
            id,
            productName,
            quantity,
            price,
            totalSum: Number(quantity) * Number(price),
          },
        };
      },
    },
    removeProduct: (state, action) => {
      const temp = state.value.filter((item) => item.id === action.payload.id);
      state.value = temp;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
