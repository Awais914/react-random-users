import axios from "axios";
import { User } from "@types";

const BASE_URL = "https://randomuser.me";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const getRandomUsers = async (
  { page = 1 }: { page?: number } = { page: 1 }
): Promise<User[]> => {
  return (
    await instance.get(
      `/api?page=${page}&results=9&seed=random&inc=gender,name,email,phone,picture,location`
    )
  )?.data?.results;
};

export default getRandomUsers;
