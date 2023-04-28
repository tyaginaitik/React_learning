import React, { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";

export const UserSliceView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const userData = useSelector((state) => state.user);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>userData.error</h2>
  ) : (
    <div>
      <h2>User List:-</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <p key={user.id}>
              {user.id},{user.name}
            </p>
          ))}
      </div>
    </div>
  );
};
