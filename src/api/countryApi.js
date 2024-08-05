import { api } from "../config/axios";

export const getAllCountry = async () => {
  try {
    const response = await api.get("/api/country");
    return response;
  } catch (error) {
    return error.response;
  }
};
