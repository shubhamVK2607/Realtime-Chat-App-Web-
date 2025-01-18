import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useFeedStore = create((set) => ({
  users: [],
  receivedRequests: [],
  isUsersLoading: false,
  isReceivedRequestsLoading: false,
  isProcessing: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/user/connect");
      set({ users: res.data.data.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getRecivedConnectionRequests: async () => {
    set({ isReceivedRequestsLoading: true });
    try {
      const res = await axiosInstance.get("/user/requests/received");
      set({ receivedRequests: res.data.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isReceivedRequestsLoading: false });
    }
  },

  connectOrIgnore: async (status, toUserId) => {
    set({ isProcessing: true });
    try {
      await axiosInstance.post(`request/send/${status}/${toUserId}`);

      set((state) => ({
        users: state.users.filter((user) => user._id !== toUserId),
      }));

      toast.success(
        status === "interested" ? "Connection Request Sent" : "Ignored"
      );
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isProcessing: false });
    }
  },

  reviewConnectionRequest: async (status, id) => {
    set({ isProcessing: true });
    try {
      await axiosInstance.post(`request/review/${status}/${id}`);

      set((state) => ({
        receivedRequests: state.receivedRequests.filter(
          (request) => request._id !== id
        ),
      }));

      toast.success(
        status === "accepted" ? "Connection Request Accepted" : "Rejected"
      );
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isProcessing: false });
    }
  },
}));
