import { User } from "@/types/user";

type UserCardProps = {
  user: User;
  onDetail: (id: number) => void;
};

const UserCard = ({ user, onDetail }: UserCardProps) => {
  return (
    <div className="border rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="w-14 h-14 rounded-full"
        />

        <div className="flex-1">
          <p className="font-semibold">
            {user.first_name} {user.last_name}
          </p>
          <p className="text-sm text-gray-500 break-all">{user.email}</p>
        </div>
      </div>

      <button
        onClick={() => onDetail(user.id)}
        className="w-full text-sm py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Detail
      </button>
    </div>
  );
};

export default UserCard;
