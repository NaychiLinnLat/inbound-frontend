import { api } from "../config/axios";

export const getProposalByPassportNoAndCountry = async (payload) => {
  try {
    const response = await api.post("/api/proposal/enquiry", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const createProposal = async (payload) => {
  try {
    const response = await api.post("/api/proposal", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
