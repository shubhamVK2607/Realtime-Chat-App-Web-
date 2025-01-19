import { useRef, useState } from "react";
import { Image, X } from "lucide-react";
import toast from "react-hot-toast";
import { usePostStore } from "../store/usePostStore";

const PostInput = ({setViewPostUploadOption}) => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { addPost } = usePostStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setViewPostUploadOption(false)
    if (!text.trim() && !imagePreview) return;

    try {
      await addPost({
        text: text.trim(),
        image: imagePreview,
      });

      setText("");
      setImagePreview(null);
 
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div
      className="w-[90%]  mx-auto mt-10 bg-base-300 rounded-xl shadow-md p-6 relative"
      style={{ height: "80vh" }}>
      <form onSubmit={handleSendMessage} className="flex flex-col h-full gap-4">
        {/* Text Area */}
        <textarea
          type="text"
          className="w-full text-base-content text-2xl font-medium bg-transparent rounded-lg p-4 resize-none shadow-sm focus:outline-none flex-shrink-0 "
          placeholder="What do you want to talk about?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Image Preview */}
        {imagePreview && (
          <div className="flex-1 overflow-y-auto scrollbar-ultra-thin mt-12">
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full object-contain rounded-xl border border-gray-300"
              />
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gray-700 text-white
              flex items-center justify-center"
                type="button">
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Send Icon */}
        <div className="flex items-center justify-end mt-auto">
          <button
            type="button"
            className={`btn btn-circle bg-gray-200 hover:bg-gray-300 p-3
                     ${imagePreview ? "text-emerald-500" : "text-gray-500"}`}
            onClick={() => fileInputRef.current?.click()}>
            <Image size={24} />
          </button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button
            type="submit"
            className="btn bg-emerald-500 rounded-2xl hover:bg-emerald-600 text-white py-2 px-5 ml-4 text-xl"
            disabled={!text.trim() && !imagePreview}>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostInput;
