"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import UserCard from "@/components/userCard";

const DashboardPage = () => {
  const router = useRouter();

  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  const fetchUsers = async (pageNumber: number) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://reqres.in/api/users?page=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres_78a869f591654962800d3a55978d5b34",
          },
        }
      );

      const data = await res.json();

      setUsers(data.data);
      setPage(data.page);
      setTotalPage(data.total_pages);
    } catch (error) {
      console.error("Fetch users error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!checkingAuth) {
      fetchUsers(page);
    }
  }, [page, checkingAuth]);

  if (checkingAuth) {
    return <p className="p-8">Checking authentication...</p>;
  }

  return (
    <div className="min-h-screen bg-sky-200 p-8">
      <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-8">Overview of your user base</p>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">List User</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onDetail={(id) => router.push(`/user/${id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
