import { createStore } from "redux";
import rootReducer from "./Mmain";

let store = createStore(rootReducer)

export default store