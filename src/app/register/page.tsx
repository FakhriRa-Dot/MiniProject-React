"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "reqres_78a869f591654962800d3a55978d5b34",
  };

  const [registerData, setRegisterData] = useState<any>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const submitRegister = async (e: React.FormEvent) => {
    const payload = {
      email: registerData.email,
      password: registerData.password,
    };

    e.preventDefault();
    console.log("Submit Klik");

    if (!registerData.email || !registerData.password) {
      toast.error("Email atau Password Salah");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      router.push("/login");
    }, 800);

    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Register berhasil");
      } else {
        toast.error(data.error || "Register gagal");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sky-200">
      <header className="flex items-center justify-between px-10 py-4 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-blue-300"></div>
          <span className="text-xl">UserMgt</span>
        </div>

        <p>
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-500 text-decoration-none hover:underline"
            onClick={() => router.push("/login")}
          >
            Sign In Here
          </a>
        </p>
      </header>

      <div className="flex justify-center items-center py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-3xl mb-2">Create an Account</h1>
          <p className="text-gray-500 mb-8">
            Get started with your account bussines today:
          </p>

          <form className="space-y-5" onSubmit={submitRegister}>
            <div>
              <label className="block font-body mb-1" htmlFor="email">
                Email:
              </label>
              <input
                onChange={(e: any) => {
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  });
                }}
                type="email"
                id="email"
                placeholder="youremail@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                           placeholder:text-gray-400 focus:outline-none
                           focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block font-body mb-1" htmlFor="password">
                Password:
              </label>
              <div className="relative">
                <input
                  onChange={(e: any) => {
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                  id="password"
                  placeholder="at least 8 characters"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10
                             placeholder:text-gray-400 focus:outline-none
                             focus:ring-2 focus:ring-blue-400"
                  required
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <i className="fa fa-eye"></i>
                </span>
              </div>
            </div>

            <div>
              <label className="block font-body mb-1">Confirm Password:</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10
                             placeholder:text-gray-400 focus:outline-none
                             focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <i className="fa fa-eye"></i>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600 font-body">
              <i className="fa fa-check-circle text-green-500 mt-1"></i>
              <p>
                Password must contain at least 8 characters, including one
                uppercase letter and one number
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600
                         active:scale-[0.98] transition
                         text-white font-accent py-2 rounded-lg shadow-md"
            >
              {loading ? "Registering..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
