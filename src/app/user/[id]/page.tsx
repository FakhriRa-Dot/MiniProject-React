"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { User } from "@/types/user";

export default function UserDetailPage() {
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

        const json = await res.json();
        setUser(json.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading user detail...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">User not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <main className="flex-1 p-4 sm:p-8 flex justify-center items-start">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-blue-500 to-sky-400 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white bg-white"
            />

            <div className="text-white text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold">
                {user.first_name} {user.last_name}
              </h1>
              <p className="opacity-90 break-all">{user.email}</p>

              <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold bg-white/20 rounded-full">
                Active Member
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-6">
              User Information
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
              <Info label="User ID" value={user.id} />
              <Info label="Role" value="Member" />
              <Info label="Status" value="Active" green />
              <Info label="Email" value={user.email} />
            </div>

            <div className="mt-10 flex justify-end">
              <button
                onClick={() => router.back()}
                className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Info({
  label,
  value,
  green,
}: {
  label: string;
  value: React.ReactNode;
  green?: boolean;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-gray-500 mb-1">{label}</p>
      <p className={`font-semibold ${green ? "text-green-600" : ""}`}>
        {value}
      </p>
    </div>
  );
}
