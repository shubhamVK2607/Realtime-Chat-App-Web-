import { useFeedStore } from "../store/useFeedStore";

const ConnectionRequestsCard = ({ request }) => {
  const { reviewConnectionRequest } = useFeedStore();
  const handleConnectOrIgnore = (status, requestId) => {
    reviewConnectionRequest(status, requestId);
  };

  const { fullName, photoURL } = request.fromUserId;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body grid grid-cols-4 gap-7 w-full">
        <div className="col-span-1 w-20 h-20">
          <img
            className="w-full h-full object-cover rounded-full"
            src={photoURL || "/avatar.png"}
            alt="User Avatar"
          />
        </div>

        <div className="col-span-3 flex flex-col gap-3 w-full">
          <p className="font-bold text-3xl text-ellipsis overflow-hidden">
            {fullName}
          </p>

          <div className="flex gap-2 w-full">
            <button
              onClick={() => handleConnectOrIgnore("accepted", request._id)}
              className="py-2 px-4 bg-blue-700 text-white rounded-lg">
              Accept
            </button>
            <button
              onClick={() => handleConnectOrIgnore("rejected", request._id)}
              className="py-2 px-4 bg-gray-700 text-white rounded-lg">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionRequestsCard;
