"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "reqres_78a869f591654962800d3a55978d5b34",
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submitLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Email dan password wajib diisi");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers,
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Login gagal");
        return;
      }

      localStorage.setItem("loginToken", data.token);
      toast.success("Berhasil login 🎉");

      router.push("/dashboard");
    } catch (error) {
      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/2 bg-linear-to-b from-sky-400 via-blue-500 to-blue-700 p-10 text-white">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-white/80 rounded-md" />
              <span className="text-2xl font-bold">UserMgt</span>
            </div>

            <h2 className="text-4xl font-bold mb-4">Welcome Back 👋</h2>
            <p className="opacity-90">
              Login to manage users and view your dashboard.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="md:hidden mb-8 text-center">
            <h1 className="text-2xl font-bold text-blue-600">UserMgt</h1>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Sign In</h1>
          <p className="text-gray-500 mb-8">
            Enter your detail below to sign in
          </p>

          <form className="space-y-6" onSubmit={submitLogin}>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="eve.holt@reqres.in"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="cityslicka"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 text-sm text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-semibold py-2 rounded-lg transition"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don&apos;t have an account?{" "}
            <button
              onClick={() => router.push("/register")}
              className="text-blue-500 hover:underline font-medium"
            >
              Sign Up Here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
