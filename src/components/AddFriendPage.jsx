import { useEffect } from "react";
import { useFeedStore } from "../store/useFeedStore";
import UserCard from "./UserCard";
import UserSkeleton from "./skeletons/UserSkeleton";

const AddFriend = () => {
  const { getUsers, users, isUsersLoading } = useFeedStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) {
    return (
      <UserSkeleton/>
    )
   
  }

  return (
    <div className="bg-base-200 min-h-full w-full">
      <div className=" px-4 flex flex-col items-center">
      
        <div className="bg-base-100 rounded-lg shadow-cl w-full 2xl:max-w-6xl lg:w-full h-[calc(100vh-8rem)] flex flex-col gap-4 px-4 overflow-auto scrollbar-ultra-thin">
        <h1 className="text-2xl font-bold mx-2 p-2">Connect with People</h1>
          {users.length ? (
            users.map((user) => <UserCard key={user._id} user={user} />)
          ) : (
            <h1 className="font-bold text-xl text-center text-gray-500">
              No Users Found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
