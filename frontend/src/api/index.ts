import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export {
  type LoginCredentials,
  type RegisterData,
  type AuthResponse,
} from "./auth";
