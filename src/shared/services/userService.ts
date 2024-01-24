import axios from "axios";
import api from "../config/api";

type UpdateUserPhotoRequest = {
  photo: string;
};

type UpdateUserPhotoResponse = {};

export const updateUserPhoto = async (
  data: UpdateUserPhotoRequest
): Promise<UpdateUserPhotoResponse> => {
  try {
    const response = await api.post<UpdateUserPhotoResponse>(
      "/users/update-photo",
      data
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    }

    throw error;
  }
};
