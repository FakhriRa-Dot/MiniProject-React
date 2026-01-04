import { User } from "@/types/user";

type UserProfileProps = {
  user: User;
  onBack: () => void;
};

const UserProfile = ({ user, onBack }: UserProfileProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md text-center">
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold">
        {user.first_name} {user.last_name}
      </h1>
      <p className="text-gray-500 mb-6">{user.email}</p>

      <button
        onClick={onBack}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Back
      </button>
    </div>
  );
};

export default UserProfile;
