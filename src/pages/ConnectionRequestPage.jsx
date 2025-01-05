import { useEffect } from "react";
import { useFeedStore } from "../store/useFeedStore";
import ConnectionRequestsCard from "../components/ConnectionRequestsCard";

const ConnectionRequestPage = () => {
  const {
    getRecivedConnectionRequests,
    receivedRequests,
    isReceivedRequestsLoading,
  } = useFeedStore();

  useEffect(() => {
    getRecivedConnectionRequests();
  }, [getRecivedConnectionRequests]);

  if (isReceivedRequestsLoading) {
    <>Loading...</>;
  }

  return (
    <div className="bg-base-200 h-screen">
      <div className="pt-20 px-4 flex flex-col items-center">
        <div
          className="bg-base-100 rounded-lg shadow-cl w-full max-w-md h-[calc(100vh-8rem)] flex flex-col items-center gap-2 overflow-auto
          scrollbar-ultra-thin">
          {receivedRequests.length ? (
            <>
              <h1 className="font-bold text-xl">
                Request Pending : {receivedRequests.length}
              </h1>

              {receivedRequests.map((request) => (
                <ConnectionRequestsCard key={request._id} request={request} />
              ))}
            </>
          ) : (
            <h1 className="font-bold text-xl">No Pending Requests</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectionRequestPage;
