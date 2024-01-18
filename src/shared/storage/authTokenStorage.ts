import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "../constants/storageConstants";
import { StorageValue } from "zustand/middleware";

type StorageAuthTokenProps = {
  token: string;
};

export async function getAuthTokenStorage(): Promise<string> {
  const response = await AsyncStorage.getItem(USER_STORAGE);
  const data: StorageValue<StorageAuthTokenProps> = response
    ? JSON.parse(response)
    : {};

  return data?.state?.token;
}
