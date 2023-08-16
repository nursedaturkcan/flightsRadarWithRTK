import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helpers/constant";
import axios from "axios";


export const getFlights=createAsyncThunk("flights/getFlights",async()=>{
// api isteği
const res= await axios.request(options);
// gelen dizi res'i objeye çevirme
const newData=res.data.aircraft.map((flight)=>({
    id:flight[0],
    code:flight[1],
    lat:flight[2],
    lan:flight[3],
}))
// veriyi slice'a aktarma
return newData;
});