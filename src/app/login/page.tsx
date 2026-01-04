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
      console.log("LOGIN RESPONSE:", data);

      if (!response.ok) {
        toast.error(data.error || "Login gagal");
        return;
      }

      localStorage.setItem("loginToken", data.token);

      toast.success("Berhasil login 🎉");

      setTimeout(() => {
        router.push("/dashboard");
      }, 600);
    } catch (error) {
      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden bg-white">
        <div className="hidden md:flex md:w-1/2 bg-linear-to-b from-sky-300 via-blue-500 to-blue-900 p-8">
          <div className="flex items-start gap-3 text-white font-bold text-xl">
            <div className="w-8 h-8 bg-white/80 rounded-md" />
            UserMgt
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl font-extrabold mb-2">Hello!</h1>
          <p className="text-gray-500 mb-8">
            Enter your detail below to sign in:
          </p>

          <form className="space-y-6" onSubmit={submitLogin}>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@req.res.in"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="yourpassword"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">
                  {" "}
                  <i className="fa fa-eye"></i>{" "}
                </span>
              </div>
              <div className="text-right mt-1">
                {" "}
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  {" "}
                  Forgot Your Password?{" "}
                </a>{" "}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
            >
              {loading ? "Signing in..." : "SIGN IN"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            {" "}
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
              onClick={() => router.push("/register")}
            >
              {" "}
              Sign Up Here{" "}
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
