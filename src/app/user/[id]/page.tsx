"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { User } from "@/types/user";

const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://reqres.in/api/users/${id}`, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres_78a869f591654962800d3a55978d5b34",
          },
        });

        const data = await res.json();
        setUser(data.data);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <p className="p-8">Loading user detail...</p>;
  }

  if (!user) {
    return <p className="p-8">User not found</p>;
  }

  return (
    <div className="min-h-screen bg-sky-200 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-500 to-sky-400 p-8 flex items-center gap-6">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="w-28 h-28 rounded-full border-4 border-white bg-white"
          />

          <div className="text-white">
            <h1 className="text-3xl font-bold">
              {user.first_name} {user.last_name}
            </h1>
            <p className="opacity-90">{user.email}</p>

            <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold bg-white/20 rounded-full">
              Active Member
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-6">User Information</h2>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 mb-1">User ID</p>
              <p className="font-semibold">{user.id}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 mb-1">Role</p>
              <p className="font-semibold">Member</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 mb-1">Status</p>
              <p className="font-semibold text-green-600">Active</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 mb-1">Email</p>
              <p className="font-semibold break-all">{user.email}</p>
            </div>
          </div>

          {/* ACTION */}
          <div className="mt-10 flex justify-end">
            <button
              onClick={() => router.back()}
              className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
