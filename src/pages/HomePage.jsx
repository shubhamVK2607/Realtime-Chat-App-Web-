import PostContainer from "../components/PostContainer";
import PostInput from "../components/PostInput";

const HomePage = () => {
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl flex flex-col items-center  h-[calc(100vh-8rem)] overflow-auto scrollbar-ultra-thin">
          <PostInput />
          <PostContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
