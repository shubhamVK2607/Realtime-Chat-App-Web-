const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-5 items-center w-full p-4">
      {/* Render 5 Skeleton Cards */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex items-center bg-base-300 p-4 rounded-lg w-full gap-4 animate-pulse"
        >
          {/* Skeleton for Image */}
          <div className="w-24 h-20 bg-base-100 rounded-full"></div>

          {/* Skeleton for Details Section */}
          <div className="flex flex-col gap-3 w-full">
            {/* Skeleton for Title */}
            <div className="h-4 w-3/4 bg-base-100 rounded"></div>

            {/* Skeleton for Buttons */}
            <div className="flex gap-2">
              <div className="h-8 w-1/3 bg-base-100 rounded"></div>
              <div className="h-8 w-1/3 bg-base-100 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
