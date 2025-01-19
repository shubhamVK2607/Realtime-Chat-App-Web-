import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { usePostStore } from "../store/usePostStore";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import { getRelativeTime } from "../lib/utils";

const PostCard = ({ post }) => {
  const { updateLikes, addComments } = usePostStore();
  const { authUser } = useAuthStore();

  const [isAnimating, setIsAnimating] = useState(false);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [visibleCommentsCount, setVisibleCommentsCount] = useState(3); // Track visible comments

  const postLiked = post?.likes?.some((userId) => userId === authUser._id);

  const handleLikeClick = async () => {
    if (!postLiked) {
      setIsAnimating(true);
    }

    await updateLikes(post._id);

    setTimeout(() => setIsAnimating(false), 100);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const commentData = {
        text: comment,
      };
      addComments(post._id, commentData);
      setComment("");
    }
  };

  const handleLoadMoreComments = () => {
    setVisibleCommentsCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="w-full mx-auto bg-base-300 shadow-md rounded-lg py-6">
      <div className="flex items-center mb-4 px-6">
        <img
          src={post?.fromId?.photoURL || "/avatar.png"}
          alt="Profile"
          className="w-14 h-14 rounded-full border border-base-300 object-cover"
        />
        <div className="ml-4">
          <h2 className="font-semibold text-lg text-base-content">
            {post?.fromId?.fullName || "Anonymous User"}
          </h2>
          <p className="text-sm text-base-content/70">
            {getRelativeTime(post.createdAt)}
          </p>
        </div>
      </div>

      {post?.text && (
        <p className="mb-4 text-base-content px-6 py-3 text-base">
          {post?.text}
        </p>
      )}

      {post?.image && (
        <div>
          <img
            src={post?.image}
            alt="Post"
            className="w-full rounded-md border border-base-300 object-cover"
          />
        </div>
      )}

      <div className="border-t border-base-200 pt-3 px-6">
        <div className="flex justify-between text-sm text-base-content/70 mb-3">
          <span>
            <strong>{post?.likes?.length || 0}</strong> Likes
          </span>
          <span>
            <strong>{post.comments.length}</strong> Comments
          </span>
        </div>

        <div className="flex justify-around items-center text-base-content text-base font-medium">
          <button
            type="button"
            className={`relative flex items-center px-10 py-3 rounded-lg gap-2 hover:bg-base-200 transition-colors ${
              postLiked ? "text-emerald-400" : ""
            }`}
            onClick={handleLikeClick}>
            <ThumbsUp className={`w-6 h-6`} />
            <span className="text-xl">Like</span>

            {isAnimating && (
              <div
                className="absolute -top-5 left-5 animate-fly text-emerald-500"
                key="fly">
                <ThumbsUp className="w-10 h-10" />
              </div>
            )}
          </button>

          <button
            type="button"
            className="flex items-center gap-2 hover:bg-base-200 px-10 py-3 rounded-lg"
            onClick={() => setIsCommentBoxOpen(!isCommentBoxOpen)}>
            <MessageSquare className="w-5 h-5" />
            <span>Comment</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 hover:bg-base-200 px-10 py-3 rounded-lg">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {isCommentBoxOpen && (
          <>
            {/* Comment Input */}
            <form
              onSubmit={handleCommentSubmit}
              className="mt-4 flex items-center gap-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-grow px-4 py-2 border rounded-lg border-base-300 text-base-content bg-base-100"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-content font-semibold rounded-lg hover:bg-primary-focus">
                Post
              </button>
            </form>

            {/* Comments Section */}
            <div className="mt-4">
              {post?.comments?.slice(0, visibleCommentsCount).map((comment) => (
                <div key={comment._id} className="flex items-start gap-3 mb-3">
                  <img
                    src={comment?.user?.photoURL || "/avatar.png"}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full border border-base-300 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-base-content">
                      {comment?.user?.fullName}
                    </h4>
                    <p className="text-sm text-base-content/80">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCommentsCount < post.comments.length && (
              <button
                onClick={handleLoadMoreComments}
                className="mt-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary-focus">
                Load More Comments
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;
