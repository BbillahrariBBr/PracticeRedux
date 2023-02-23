import { INCREMENT } from "./actionType";
import { DECREMENT } from "./actionType";
export const increment = (value) => {

    return {
        type: INCREMENT,
        payload: value,
    };
}

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,

    };
}