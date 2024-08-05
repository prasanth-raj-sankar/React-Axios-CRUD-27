import axios from "axios";

const API_URL = "https://66ab7016636a4840d7caab8b.mockapi.io/api/v1";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    batch: "PRASANTH-TAMIL",
  },
});

// Create a product - POST
export const createProductAPI = async (listData) => {
  const response = await instance.post(`/axios`, listData);
  if (response.status !== 201) {
    throw new Error("Something went wrong");
  }
  return response.data;
};

// Read all products - GET
export const readProductsAPI = async () => {
  const response = await instance.get(`/axios`);
  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }
  return response.data;
};

// Update a product - PUT
export const updateProductAPI = async (id, listData) => {
  const response = await instance.put(`/axios/${id}`, listData);
  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }
  return response.data;
};

// Delete a product - DELETE
export const deleteProductAPI = async (id) => {
  const response = await instance.delete(`/axios/${id}`);
  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }
  return response.data;
};
