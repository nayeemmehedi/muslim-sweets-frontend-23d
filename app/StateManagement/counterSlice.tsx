import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: any[];
  order: {};
}

const initialState: CounterState = {
  value: [],
  order: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productRedux: (state, action: PayloadAction<any>) => {
      const existingProductIndex = state.value.findIndex(
        (item) => item.englishName === action.payload.englishName
      );

      if (existingProductIndex !== -1) {
        // If the product already exists, update its quantity
        state.value[existingProductIndex].qty += action.payload.qty;
      } else {
        // If the product doesn't exist, add it to the array
        state.value.push(action.payload);
      }
    },
    productDeleteRedux: (state, action: PayloadAction<any>) => {
      const newValue = state.value.filter(
        (item) => item.englishName !== action.payload
      );

      console.log("newValue", newValue);

      state.value = newValue;
    },
    productAndLocation: (state, action: PayloadAction<any>) => {
      let value = state.order
      state.order = { ...value,...action.payload  };
      console.log(state.order)
    },
  },
});

// Action creators are generated for each case reducer function
export const { productRedux, productDeleteRedux,productAndLocation } = counterSlice.actions;

export default counterSlice.reducer;
