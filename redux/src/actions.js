import * as actions from "./actionTypes";

// export const bugAdded = (description) => ({
//   type: actions.BUG_ADDED,
//   payload: {
//     description,
//   },
// });

const bugAdded = (description) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  };
};

const bugRemoved = (id) => {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id,
    },
  };
};

const bugResolved = (id) => {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id,
    },
  };
};

export { bugAdded, bugRemoved, bugResolved };
