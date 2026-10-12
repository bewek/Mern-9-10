import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/users";

// GET all users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

// GET user by ID
export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  },
);

// POST - create a new user
export const addUser = createAsyncThunk("user/addUser", async (userData) => {
  const response = await axios.post(BASE_URL, userData);
  return response.data;
});

// PUT - update an existing user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, userData }) => {
    const response = await axios.put(`${BASE_URL}/${id}`, userData);
    return response.data;
  },
);

// DELETE - remove a user
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id; // we just need the id back, so we can remove it from state
});
