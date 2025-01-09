import { useEffect } from "react";
import { useFeedStore } from "../store/useFeedStore";
import UserCard from "../components/UserCard";

const AddFriend = () => {
  const { getUsers, users, isUsersLoading } = useFeedStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) {
    <>Loading...</>;
  }

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="pt-20 px-4 flex flex-col items-center">
        <div className="bg-base-100 rounded-lg shadow-cl w-full 2xl:max-w-6xl lg:w-full h-[calc(100vh-8rem)] flex justify-center flex-wrap gap-4 overflow-auto scrollbar-ultra-thin">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
