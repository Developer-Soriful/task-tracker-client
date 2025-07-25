import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const TaskItem = ({ task, refetch }) => {
  const { _id, title, description, dueDate, status, priority } = task;

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title,
    description,
    dueDate,
    status,
    priority,
  });

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${_id}`);
      toast.success("Task deleted successfully!");
      refetch(); // refresh task list
    } catch (err) {
      toast.error("Failed to delete task");
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/tasks/${_id}`, formData);
      toast.success("Task updated successfully!");
      setIsOpen(false);
      refetch();
    } catch (err) {
      toast.error("Failed to update task");
      console.error(err);
    }
  };

  return (
    <>
      {/* 🔹 Task Row */}
      <tr className="text-sm sm:text-base hover:bg-gray-50 transition">
        <td className="border px-2 py-2">{title}</td>
        <td className="border px-2 py-2 hidden sm:table-cell">{description || "-"}</td>
        <td className="border px-2 py-2">{new Date(dueDate).toLocaleDateString()}</td>
        <td className="border px-2 py-2">{status}</td>
        <td className="border px-2 py-2">{priority}</td>
        <td className="border px-2 py-2 text-center">
          <button
            onClick={() => setIsOpen(true)}
            className="px-2 py-1 bg-yellow-400 text-white rounded mr-1 text-xs sm:text-sm"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-2 py-1 bg-red-500 text-white rounded text-xs sm:text-sm"
          >
            Delete
          </button>
        </td>
      </tr>

      {/* 🔹 Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded shadow-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="border rounded px-3 py-2"
                placeholder="Title"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="border rounded px-3 py-2"
                placeholder="Description"
              />
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate?.split("T")[0]}
                onChange={handleInputChange}
                className="border rounded px-3 py-2"
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="border rounded px-3 py-2"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="border rounded px-3 py-2"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
              >
                Update Task
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
