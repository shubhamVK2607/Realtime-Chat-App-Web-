import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const usePostStore = create((set, get) => ({
  posts: [],
  isPostsLoading: false,
  isPostUploading: false,

  addPost: async (postData) => {
    const { posts } = get();
    set({ isPostUploading: true });
    try {
      const res = await axiosInstance.post("/post/addPost", postData);
      set({ posts: [...posts, res.data] });
      toast.success(res.message);
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
      set({ posts: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isPostsLoading: false });
    }
  },
}));
