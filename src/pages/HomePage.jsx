import { useEffect } from "react";
import { useFeedStore } from "../store/useFeedStore";
import UserCard from "../components/UserCard";

const HomePage = () => {
  const { getUsers, users, isUsersLoading } = useFeedStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) {
    <>Loading...</>;
  }

  return (
    <div className="bg-base-200 h-screen">
      <div className="pt-20 px-4 flex flex-col items-center">
        <div
          className="bg-base-100 rounded-lg shadow-cl w-full max-w-md h-[calc(100vh-8rem)] flex flex-col items-center gap-2 overflow-auto
          scrollbar-ultra-thin">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
