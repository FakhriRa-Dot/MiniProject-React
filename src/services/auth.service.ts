export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthService {
  login(payload: LoginPayload): Promise<string>;
}

export class ReqresAuthService implements AuthService {
  async login(payload: LoginPayload): Promise<string> {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres_78a869f591654962800d3a55978d5b34",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login gagal");
    }

    return data.token;
  }
}
