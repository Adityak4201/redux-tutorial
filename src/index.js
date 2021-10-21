// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import * as actions from "./actionTypes";
import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Glitch in FB",
  },
});

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

// console.log(store.getState());
