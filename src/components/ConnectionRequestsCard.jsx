import { useFeedStore } from "../store/useFeedStore";

const ConnectionRequestsCard = ({ request }) => {
  const { reviewConnectionRequest } = useFeedStore();
  const handleConnectOrIgnore = (status, requestId) => {
    reviewConnectionRequest(status, requestId);
  };

  const { fullName, photoURL } = request.fromUserId;
  return (
    <div className="flex items-center bg-base-300 p-4 rounded-lg shadow-md w-full max-w-2xl gap-4 border border-base-300">
      <div className="flex-shrink-0">
        <img
          src={photoURL || "/avatar2.jpg"}
          className="w-20 h-20 rounded-full object-cover border border-gray-300"
          alt="User Avatar"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between w-full">
        {/* User Name */}
        <h2 className="text-lg font-bold">{fullName || "Anonymous User"}</h2>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            className="btn btn-success btn-sm 2xl:btn-md text-xs 2xl:text-base flex-1"
            onClick={() => handleConnectOrIgnore("accepted", request._id)}>
            Accept
          </button>
          <button
            className="btn btn-error btn-sm 2xl:btn-md text-xs 2xl:text-base flex-1"
            onClick={() => handleConnectOrIgnore("rejected", request._id)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionRequestsCard;
