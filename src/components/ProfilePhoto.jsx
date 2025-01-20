

import { Camera } from "lucide-react";

const ProfilePhoto = ({handleImageUpload,selectedImg}) => {





  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="text-center">
        <div className="rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-2">Profile Photo</h1>
          </div>

          {/* Avatar upload section */}
          <div className="flex flex-col items-center gap-7">
            <div className="relative">
              <img
                src={selectedImg || "/avatar.png"}
                alt="Profile"
                className="size-[30rem] rounded-full object-cover border-4"
              />
            </div>
            <div>
              <label
                htmlFor="avatar-upload"
                className={`btn btn-primary flex items-center gap-2 `}
              >
                <Camera className="w-5 h-5" />
                Add Profile Photo
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
           
                />
              </label>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
