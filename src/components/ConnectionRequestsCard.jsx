import { useFeedStore } from "../store/useFeedStore";

const ConnectionRequestsCard = ({ request }) => {
  const { reviewConnectionRequest } = useFeedStore();
  const handleConnectOrIgnore = (status, requestId) => {
    reviewConnectionRequest(status, requestId);
  };

  const { fullName, photoURL } = request.fromUserId;
  return (
    <div className="card card-compact bg-base-300  2xl:w-[17rem] md:w-[14rem]  shadow-xl w-full h-[22rem]  2xl:h-[22rem] md:h-[18rem] sm:h-[18rem]">
      <figure className="h-[65%] w-full overflow-hidden">
        <img
          src={photoURL || "/avatar2.jpg"}
          className="h-full w-full object-cover"
          alt="User Avatar"
        />
      </figure>
      <div className="card-body h-[35%]">
        <h2 className="card-title text-lg font-bold text-center">{fullName}</h2>

        <div className="card-actions justify-end gap-2">
          <button
            className="btn btn-success btn-sm 2xl:btn-md text-xs 2xl:text-base"
            onClick={() => handleConnectOrIgnore("accepted", request._id)}>
            Accept
          </button>
          <button
            className="btn btn-error btn-sm 2xl:btn-md text-xs 2xl:text-base"
            onClick={() => handleConnectOrIgnore("rejected", request._id)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionRequestsCard;
