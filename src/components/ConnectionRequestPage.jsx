import { useEffect } from "react";
import { useFeedStore } from "../store/useFeedStore";
import ConnectionRequestsCard from "../components/ConnectionRequestsCard";
import { useAuthStore } from "../store/useAuthStore";
import UserSkeleton from "../components/skeletons/UserSkeleton";

const ConnectionRequestPage = () => {
  const {
    getRecivedConnectionRequests,
    receivedRequests,
    isReceivedRequestsLoading,
  } = useFeedStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    if (authUser) {
      getRecivedConnectionRequests();
    }
  }, [getRecivedConnectionRequests, authUser]);

  if (isReceivedRequestsLoading) {
    return <UserSkeleton/>
  }

  return (
    <div className="bg-base-200 min-h-full w-full">
      <div className="px-4 flex flex-col items-center">
     
        <div className="bg-base-100 rounded-lg shadow-cl w-full 2xl:max-w-6xl lg:w-full h-[calc(100vh-8rem)] flex px-4 flex-col items-center gap-4 overflow-auto scrollbar-ultra-thin">
        <h1 className="text-2xl font-bold mx-2 p-2">
          Connection Requests : {receivedRequests.length}
        </h1>
          {receivedRequests.length ? (
            <div className="flex flex-col w-full gap-4 items-center">
              {receivedRequests.map((request) => (
                <ConnectionRequestsCard key={request._id} request={request} />
              ))}
            </div>
          ) : (
            <h1 className="font-bold text-xl mt-4">No Pending Requests</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectionRequestPage;
