import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false
}
const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers:(builder)=> {
    builder.addCase(getFlights.pending,(state) => {
      state.isLoading = true;});
    builder.addCase(getFlights.fulfilled,(state, action) => {
      state.flights = action.payload
      state.isError = false,
        state.isLoading = false
    });
    builder.addCase(getFlights.rejected,(state) => {
      state.isError="Uçuş verilerini alırken bir hata oluştu"
      state.isLoading=false;
    } )
  
  },
})

export default flightSlice.reducer;

/*  cevap beklerken
[getFlights.pending]: (state) => {
  state.isLoading = false;
},
[getFlights.fulfilled]: (state, action) => {
  state.flights = action.payload
  state.isError = false,
    state.isLoading = false
},
[getFlights.rejected]: (state) => {
  state.isError="Uçuş verilerini alırken bir hata oluştu"
  state.isLoading=false;
}

*/