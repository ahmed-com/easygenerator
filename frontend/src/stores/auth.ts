import { defineStore } from "pinia";
import api, {
  type LoginCredentials,
  type RegisterData,
  type AuthResponse,
} from "@/api";
import { type User } from "@/types/user";

interface AuthState {
  token: string;
  user: User | null;
  error: string | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: localStorage.getItem("token") || "",
    user: null,
    error: null,
  }),
  getters: {
    isAuthenticated: (state): boolean => !!state.token,
  },
  actions: {
    async login(credentials: LoginCredentials): Promise<void> {
      try {
        const response = await api.post<AuthResponse>(
          "/auth/login",
          credentials
        );
        this.token = response.data.accessToken;
        this.user = response.data.user;
        localStorage.setItem("token", this.token);
        this.error = null;
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message;
      }
    },

    async register(userData: RegisterData): Promise<void> {
      try {
        const response = await api.post<AuthResponse>(
          "/auth/register",
          userData
        );
        this.token = response.data.accessToken;
        this.user = response.data.user;
        localStorage.setItem("token", this.token);
        this.error = null;
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message;
      }
    },

    async fetchProfile(): Promise<void> {
      try {
        const response = await api.get<User>("/auth/profile", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.user = response.data;
        this.error = null;
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message;
      }
    },

    logout(): void {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
    },
  },
});
