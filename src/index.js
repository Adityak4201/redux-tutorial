import store from "./store";

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Glitch in FB",
  },
});

console.log(store.getState());

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
