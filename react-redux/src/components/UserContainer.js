import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainer = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {user.loading
        ? "Loading"
        : user.error
        ? user.error
        : user.users.map((u) => (
            <div key={u.id}>
              {u.name} &nbsp; {u.email} &nbsp; {u.phone}
            </div>
          ))}
    </div>
  );
};

export default UserContainer;
