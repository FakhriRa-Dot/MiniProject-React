"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "reqres_78a869f591654962800d3a55978d5b34",
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const submitRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      toast.error("Semua field wajib diisi");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Password tidak sama");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers,
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Register gagal");
        return;
      }

      toast.success("Register berhasil 🎉");

      setTimeout(() => {
        router.push("/login");
      }, 700);
    } catch (error) {
      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sky-200 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-blue-400" />
            <span className="text-xl font-bold">UserMgt</span>
          </div>

          <p className="text-sm">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-blue-500 hover:underline font-medium"
            >
              Sign In
            </button>
          </p>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Create an Account
          </h1>
          <p className="text-gray-500 mb-8">
            Get started with your account today
          </p>

          <form onSubmit={submitRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="youremail@req.res.in"
                className="w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
            </div>

            <div className="text-xs text-gray-600 flex gap-2">
              <span className="text-green-500 font-bold">✔</span>
              <p>
                Password minimal 8 karakter (Reqres hanya valid contoh tertentu)
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600
                         text-white font-semibold py-2 rounded-lg
                         transition active:scale-[0.98]"
            >
              {loading ? "Registering..." : "Create Account"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
