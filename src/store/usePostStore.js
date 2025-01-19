import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const usePostStore = create((set,get) => ({
  posts: [],
  isPostsLoading: false,
  isPostUploading: false,

  addPost: async (postData) => {
    const {posts}=get()
    set({ isPostUploading: true });
    try {
      const res = await axiosInstance.post("/post/addPost", postData);

      set({ posts: [...posts, res?.data?.data] });

      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isPostUploading: false });
    }
  },

  getAllPosts: async () => {
    set({ isPostsLoading: true });
    try {
      const res = await axiosInstance.get("/post/getPosts");
      set({ posts: res?.data?.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isPostsLoading: false });
    }
  },

  updateLikes:async(postId)=>{
    const {posts}=get()
    try {
      const res = await axiosInstance.post(`/post/likes/${postId}`);

      const updatedPost = res?.data?.data; 

    const updatedPosts = posts?.map((post) =>
      post._id === updatedPost._id ? updatedPost : post
    );


    set({ posts: updatedPosts });

    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isPostsLoading: false });
    }
  },

  addComments:async(postId,commentData)=>{
    const {posts}=get()

    try {
      const res = await axiosInstance.post(`/post/comments/${postId}`,commentData);

      const updatedPost = res?.data?.data; 

    const updatedPosts = posts?.map((post) =>
      post._id === updatedPost._id ? updatedPost : post
    );

    toast.success(res.data.message);

    set({ posts: updatedPosts });

    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isPostsLoading: false });
    }
  }
}));
