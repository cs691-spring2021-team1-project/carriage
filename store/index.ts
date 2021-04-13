import { createStore } from "redux";
import cartItems from "../reducers/cartItems";

let store = createStore(cartItems)

export default store;