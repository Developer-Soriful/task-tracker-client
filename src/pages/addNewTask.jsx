import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for adding new task
export const addNewTask = createAsyncThunk(
  "task/addNewTask",
  async (taskData, thunkAPI) => {
    try {
      const response = await axios.post("https://server-task-manager-tlfh.onrender.com/tasks", taskData);
      return response.data;  // The newly created task from backend
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
