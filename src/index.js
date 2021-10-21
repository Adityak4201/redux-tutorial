// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import store from "./store";
import * as actions from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugResolved(1));

unsubscribe();

store.dispatch(actions.bugRemoved(1));

// console.log(store.getState());
