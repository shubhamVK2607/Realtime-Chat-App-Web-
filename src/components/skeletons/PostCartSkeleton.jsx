const PostCardSkeleton = () => {
    return (
      <div className="w-full mx-auto bg-base-100 shadow-md rounded-lg py-6 animate-pulse">
        {/* Profile Section */}
        <div className="flex items-center mb-4 px-6">
          {/* Profile Image Skeleton */}
          <div className="w-14 h-14 rounded-full bg-base-300"></div>
          <div className="ml-4 flex-1">
            {/* Name Skeleton */}
            <div className="h-4 w-32 bg-base-300 rounded mb-2"></div>
            {/* Timestamp Skeleton */}
            <div className="h-3 w-20 bg-base-300 rounded"></div>
          </div>
        </div>
  
        {/* Post Text Skeleton */}
        <div className="mb-4 px-6">
          <div className="h-4 w-full bg-base-300 rounded mb-2"></div>
          <div className="h-4 w-3/4 bg-base-300 rounded"></div>
        </div>
  
        {/* Post Image Skeleton */}
        <div className="mb-4 px-6">
          <div className="h-64 w-full bg-base-300 rounded"></div>
        </div>
      </div>
    );
  };
  
  export default PostCardSkeleton;
  