// src/components/AddTaskForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask, fetchTasks } from "../features/taskSlice";
import { toast } from "react-toastify";

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addNewTask(formData));
      await dispatch(fetchTasks()); // ✅ re-fetch tasks to ensure sync
      toast.success("Task added successfully!");
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        status: "Pending",
        priority: "Medium",
      });
    } catch (err) {
      toast.error("Failed to add task");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded-md">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
