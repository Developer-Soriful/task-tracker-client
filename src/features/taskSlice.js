// src/features/taskSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  const res = await axios.get("https://server-task-manager-tlfh.onrender.com/tasks");
  return res.data;
});

export const addNewTask = createAsyncThunk("task/addNewTask", async (task) => {
  const res = await axios.post("https://server-task-manager-tlfh.onrender.com/tasks", task);
  return res.data;
});

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })

      // ✅ handle async addNewTask
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload); // instantly update UI
      });
  },
});

export default taskSlice.reducer;
