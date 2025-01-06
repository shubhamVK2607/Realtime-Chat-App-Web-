import { useFeedStore } from "../store/useFeedStore";

const UserCard = ({ user }) => {
  const { connectOrIgnore } = useFeedStore();
  const handleConnectOrIgnore = (status, toUserId) => {
    connectOrIgnore(status, toUserId);
  };
  return (
    <div className="card card-compact bg-base-300  2xl:w-[17rem] md:w-[14rem]  shadow-xl w-full h-[22rem]  2xl:h-[22rem] md:h-[18rem] sm:h-[18rem]">
      <figure className="h-[65%] w-full overflow-hidden">
        <img
          src={user.photoURL || "/avatar2.jpg"}
          className="h-full w-full object-cover"
          alt="User Avatar"
        />
      </figure>
      <div className="card-body h-[35%]">
        <h2 className="card-title text-lg font-bold text-center">
          {user.fullName}
        </h2>

        <div className="card-actions justify-end gap-2">
          <button
            className="btn btn-success btn-sm 2xl:btn-md text-xs 2xl:text-base"
            onClick={() => handleConnectOrIgnore("interested", user._id)}>
            Connect
          </button>
          <button
            className="btn btn-error btn-sm 2xl:btn-md text-xs 2xl:text-base"
            onClick={() => handleConnectOrIgnore("ignored", user._id)}>
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
