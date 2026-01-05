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
    const token = localStorage.getItem("loginToken");

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

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    router.replace("/login");
  };

  if (checkingAuth) {
    return <p className="p-8">Checking authentication...</p>;
  }

  return (
    <div className="min-h-screen flex bg-sky-200">
      <aside className="w-64 bg-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">UserMgt</h2>

        <nav className="flex flex-col gap-4">
          <button className="text-left px-3 py-2 rounded-lg bg-gray-500">
            Dashboard
          </button>

          <button className="text-left px-3 py-2 rounded-lg hover:bg-blue-200">
            Users
          </button>

          <button className="text-left px-3 py-2 rounded-lg hover:bg-blue-200">
            Settings
          </button>
        </nav>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">Overview of your user base</p>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">List User</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onDetail={(id) => router.push(`/user/${id}`)}
                  />
                ))}
              </div>

              <div className="flex flex-col items-center gap-4 mt-8">
                <div className="flex gap-2">
                  {Array.from({ length: totalPage }).map((_, index) => {
                    const pageNumber = index + 1;

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={`w-9 h-9 rounded-lg text-sm font-semibold
                          ${
                            page === pageNumber
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 hover:bg-gray-300"
                          }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>

                <p className="text-sm text-gray-500">
                  Page {page} of {totalPage}
                </p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
