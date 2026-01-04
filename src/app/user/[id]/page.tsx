"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { User } from "@/types/user";

const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://reqres.in/api/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres_78a869f591654962800d3a55978d5b34",
        },
      });
      const data = await res.json();
      setUser(data.data);
    };

    fetchUser();
  }, [id]);

  if (!user) return <p className="p-8">Loading...</p>;

  return (
    <div className="min-h-screen bg-sky-200 flex items-center justify-center p-8">
      <div className="flex gap-10 w-full max-w-5xl">
        <div className="shrink-0">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="w-40 h-40 rounded-full bg-white"
          />
        </div>

        <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-2">
            {user.first_name} {user.last_name}
          </h1>

          <p className="text-gray-500 mb-6">{user.email}</p>

          <div className="space-y-3 text-left">
            <p>
              <span className="font-semibold">User ID:</span> {user.id}
            </p>
            <p>
              <span className="font-semibold">Status:</span> Active
            </p>
            <p>
              <span className="font-semibold">Role:</span> Member
            </p>
          </div>

          <button
            onClick={() => router.back()}
            className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
