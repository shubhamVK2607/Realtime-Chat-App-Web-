import { useFeedStore } from "../store/useFeedStore";

const UserCard = ({ user }) => {
  const { connectOrIgnore } = useFeedStore();
  const handleConnectOrIgnore = (status, toUserId) => {
    connectOrIgnore(status, toUserId);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body grid grid-cols-4 gap-7 w-full">
        <div className="col-span-1 w-20 h-20">
          <img
            className="w-full h-full object-cover rounded-full"
            src={user?.photoURL || "/avatar.png"}
            alt="User Avatar"
          />
        </div>

        <div className="col-span-3 flex flex-col gap-3 w-full">
          <p className="font-bold text-3xl text-ellipsis overflow-hidden">
            {user?.fullName}
          </p>

          <div className="flex gap-2 w-full">
            <button
              onClick={() => handleConnectOrIgnore("interested", user._id)}
              className="py-2 px-4 bg-blue-700 text-white rounded-lg">
              Connect
            </button>
            <button
              onClick={() => handleConnectOrIgnore("ignored", user._id)}
              className="py-2 px-4 bg-gray-700 text-white rounded-lg">
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
