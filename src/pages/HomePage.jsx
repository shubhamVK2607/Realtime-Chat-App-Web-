import { useState, useRef, useEffect } from "react";
import PostContainer from "../components/PostContainer";
import { useAuthStore } from "../store/useAuthStore";
import AddFriend from "./AddFriendPage";
import ConnectionRequestPage from "./ConnectionRequestPage";
import PostInput from "../components/PostInput";

const HomePage = () => {
  const { authUser } = useAuthStore();
  const [viewPostUploadOption, setViewPostUploadOption] = useState(false);
  const postInputRef = useRef(null);

  // Close PostInput when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (postInputRef.current && !postInputRef.current.contains(event.target)) {
        setViewPostUploadOption(false);
      }
    };

    if (viewPostUploadOption) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [viewPostUploadOption]);

  return (
    <div className="h-screen bg-base-200">
      <div className="flex gap-4 items-center justify-center pt-20 px-4">
        {/* Left Section: AddFriend */}
        <div className="rounded-lg shadow-cl w-full max-w-[25%] flex flex-col items-center h-[calc(100vh-8rem)]">
          <AddFriend />
        </div>

        {/* Center Section */}
        <div
          className="bg-base-100 rounded-lg shadow-cl w-full max-w-[50%] flex flex-col items-center h-[calc(100vh-8rem)] overflow-auto scrollbar-ultra-thin"
          ref={postInputRef}
        >
          {viewPostUploadOption ? (
            // Only render PostInput when viewPostUploadOption is true
            <PostInput setViewPostUploadOption={setViewPostUploadOption}/>
          ) : (
            <>
              {/* Post Upload Placeholder */}
              <div className="w-[90%] flex gap-2 mb-10 py-4">
                <img
                  src={authUser.photoURL || "/avatar.png"}
                  className="w-[4.5rem] h-[4.5rem] rounded-full object-cover"
                  alt="User Avatar"
                />
                <div
                  className="h-[4.6rem] w-[88%] rounded-full border border-base-200 flex-shrink-0 px-10 flex items-center text-2xl cursor-pointer bg-base-300"
                  onClick={() => setViewPostUploadOption(true)}
                >
                  Start a Post
                </div>
              </div>

              {/* Posts Container */}
              <PostContainer />
            </>
          )}
        </div>

        {/* Right Section: ConnectionRequest */}
        <div className="rounded-lg shadow-cl w-full max-w-[25%] flex flex-col items-center h-[calc(100vh-8rem)]">
          <ConnectionRequestPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
