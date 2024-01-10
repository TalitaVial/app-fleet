import axios from "axios";
import api from "../config/api";

export type RegisterServiceRequest = {
  name: string;
  email: string;
  password: string;
};

export type RegisterServiceResponse = {};

export const registerService = async (
  data: RegisterServiceRequest
): Promise<RegisterServiceResponse> => {
  try {
    const response = await api.post<RegisterServiceResponse>("/users", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    }
    throw error;
  }
};

export type LoginServiceRequest = {
  email: string;
  password: string;
};

export type LoginServiceResponse = {
  token: string;
};

export const loginService = async (
  data: LoginServiceRequest
): Promise<LoginServiceResponse> => {
  try {
    const response = await api.post<LoginServiceResponse>("/auth/login", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    }
    throw error;
  }
};

export type UserLoggedServiceResponse = {
  id: string;
  name: string;
  email: string;
  photo: string;
};

export const getUserLoggedService = async () => {
  try {
    const response = await api.get<UserLoggedServiceResponse>("/auth/me");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    }
  }
};
