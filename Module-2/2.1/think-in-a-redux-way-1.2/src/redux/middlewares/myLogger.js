import rootReducer from "../rootReducer";
// create our first middle ware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());
    const upcomingStateNext = [action].reduce(rootReducer, upcomingState);

    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);
    console.log(`Upcoming State Next: ${JSON.stringify(upcomingStateNext)}`);

    // pass action
    return next(action);

}
export default myLogger;