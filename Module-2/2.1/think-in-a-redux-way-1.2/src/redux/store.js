import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);
// const dstore = createStore(dynamicCounterReducer);

export default store;