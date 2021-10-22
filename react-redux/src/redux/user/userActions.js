import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const users = res.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((err) => {
      const error = err.msg;
      dispatch(fetchUsersFailure(error));
    });
};
