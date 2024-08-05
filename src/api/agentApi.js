import { api } from "../config/axios";

export const getAgentByLicense = async (payload) => {
  try {
    const response = await api.post("/api/agent", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
