import { Mail, MessageCircle, User } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  // Array of icons to use
  const icons = [<Mail key="mail" size={36}/>, <MessageCircle key="message"size={36} />, <User key="user" size={36}/>];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="w-[30rem] text-center">
        {/* Animated Icon Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 flex items-center justify-center ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            >
              {/* Render an icon from the array */}
              <div
                className={`text-primary text-6xl ${
                  i % 2 === 0 ? "animate-bounce" : "animate-spin"
                }`}
              >
                {icons[i % icons.length]}
              </div>
            </div>
          ))}
        </div>
        {/* Title and Subtitle */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
