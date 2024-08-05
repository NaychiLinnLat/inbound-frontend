import { api } from "../config/axios";

export const getAllCoveragePlan = async () => {
  try {
    const response = await api.post("/api/premium");
    return response;
  } catch (error) {
    return error.response;
  }
};
