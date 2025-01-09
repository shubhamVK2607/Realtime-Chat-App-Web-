import React, { useEffect } from "react";
import { usePostStore } from "../store/usePostStore";
import PostCard from "./PostCard";

const PostContainer = () => {
  const { getAllPosts, isPostsLoading, posts } = usePostStore();
  console.log(posts);
  useEffect(() => {
    getAllPosts();
  }, [posts]);
  return (
    <div className="w-[70%] flex flex-col gap-5">
      {posts?.data?.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
