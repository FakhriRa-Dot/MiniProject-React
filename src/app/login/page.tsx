"use client";

import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";
import { ReqresAuthService } from "@/services/auth.service";
import { LoginForm } from "@/components/loginForm";

export default function LoginPage() {
  const router = useRouter();
  const authService = new ReqresAuthService();
  const { login, loading } = useLogin(authService);

  const handleLogin = async (email: string, password: string) => {
    const token = await login(email, password);
    if (token) router.push("/dashboard");
  };

  return <LoginForm loading={loading} onSubmit={handleLogin} />;
}
