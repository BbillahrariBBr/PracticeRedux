import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";


// const store = createStore(rootReducer, applyMiddleware(myLogger));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));
// const dstore = createStore(dynamicCounterReducer);

export default store;