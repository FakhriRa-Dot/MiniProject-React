import { useState } from "react";
import { toast } from "react-toastify";
import { AuthService } from "@/services/auth.service";

export const useLogin = (authService: AuthService) => {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      toast.error("Email dan password wajib diisi");
      return null;
    }

    try {
      setLoading(true);
      const token = await authService.login({ email, password });
      localStorage.setItem("loginToken", token);
      toast.success("Berhasil login 🎉");
      return token;
    } catch (error: any) {
      toast.error(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
