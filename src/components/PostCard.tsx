import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="w-[70%] mx-auto bg-base-300 shadow-base-100 rounded-lg shadow-md ">
      {/* Profile Section */}
      <div className="py-2 px-5">
        <div className="flex items-center mb-4">
          <img
            src={post?.fromId?.photoURL || "/avatar.png"}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          <div className="ml-3">
            <h2 className="font-bold  text-2xl">{post?.fromId?.fullName}</h2>
            <p className="text-sm ">Just now</p>
          </div>
        </div>

        {/* Post Text */}
        <p className=" mb-4">{post?.text}</p>
      </div>

      {/* Post Image */}
      {post?.image && (
        <img
          src={post?.image}
          alt="Post"
          className="w-full rounded-lg object-cover"
        />
      )}
    </div>
  );
};

export default PostCard;
