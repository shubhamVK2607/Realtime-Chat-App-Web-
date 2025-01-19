import  { useEffect } from "react";
import { usePostStore } from "../store/usePostStore";
import PostCard from "./PostCard";
import PostCardSkeleton from "./skeletons/PostCartSkeleton";
import { Loader } from "lucide-react";


const PostContainer = () => {
  const { getAllPosts, isPostsLoading,isPostUploading, posts } = usePostStore();

  useEffect(() => {
    getAllPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPostUploading]);

  if(isPostsLoading){
    return <PostCardSkeleton/>
  }

  return (
    <div className="w-[90%] flex flex-col gap-5">
    {/* Show the loading UI first, then the new post at the top */}
    {isPostUploading && (
      <div className="flex justify-center items-center gap-2 py-4 border border-base-300 rounded-lg shadow-sm bg-base-100 mt-4">
    
        <Loader className="size-10 animate-spin" />
        <span className="text-sm text-gray-600">Your post is uploading...</span>
      </div>
    )}

    {/* Display existing posts */}
    {posts?.map((post) => (
      <PostCard key={post._id} post={post} />
    ))}
  </div>
  
  );
};

export default PostContainer;
