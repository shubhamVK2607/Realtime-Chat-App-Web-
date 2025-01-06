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
        <div className="bg-base-100 rounded-lg shadow-cl w-full 2xl:max-w-6xl lg:w-full h-[calc(100vh-8rem)] flex justify-center flex-wrap gap-4 overflow-auto scrollbar-ultra-thin">
          {receivedRequests.length ? (
            <>
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
