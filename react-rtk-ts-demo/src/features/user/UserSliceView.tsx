import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const UserSliceView = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const userData = useAppSelector((state) => state.user);
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
