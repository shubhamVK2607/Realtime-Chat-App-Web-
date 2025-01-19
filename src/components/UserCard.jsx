import { useFeedStore } from "../store/useFeedStore";

const UserCard = ({ user }) => {
  const { connectOrIgnore } = useFeedStore();
  const handleConnectOrIgnore = (status, toUserId) => {
    connectOrIgnore(status, toUserId);
  };
  return (
    <div className="flex items-center bg-base-300 p-4 rounded-lg shadow-md w-full max-w-2xl gap-4">
      {/* User Image */}
      <div className="flex-shrink-0">
        <img
          src={user.photoURL || "/avatar2.jpg"}
          className="w-20 h-20 rounded-full object-cover border border-gray-300"
          alt="User Avatar"
        />
      </div>

      {/* User Details and Actions */}
      <div className="flex flex-col justify-between w-full">
        {/* User Name */}
        <h2 className="text-lg font-bold">
          {user.fullName || "Anonymous User"}
        </h2>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            className="btn btn-success  btn-sm 2xl:btn-md text-xs 2xl:text-base flex-1"
            onClick={() => handleConnectOrIgnore("interested", user._id)}>
            Connect
          </button>
          <button
            className="btn btn-error btn-sm 2xl:btn-md text-xs 2xl:text-base flex-1"
            onClick={() => handleConnectOrIgnore("ignored", user._id)}>
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
