import { api } from "../config/axios";

export const getPremiumRateByAgeAndCoveragePlan = async (payload) => {
  try {
    const response = await api.post("/api/premium", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
