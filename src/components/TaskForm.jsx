import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addNewTask } from "../features/taskSlice"; 

const TaskForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(addNewTask(data));
      toast.success("Task added successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to add task!");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow p-4 rounded mb-6 grid gap-4"
    >
      <input
        {...register("title", { required: true })}
        className="border p-2"
        placeholder="Task Title"
      />
      {errors.title && <span className="text-red-500">Title is required</span>}

      <textarea
        {...register("description")}
        className="border p-2"
        placeholder="Description"
      />

      <input
        type="date"
        {...register("dueDate", { required: true })}
        className="border p-2"
      />
      {errors.dueDate && (
        <span className="text-red-500">Due Date is required</span>
      )}

      <select {...register("status")} className="border p-2">
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <select {...register("priority")} className="border p-2">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit" className="bg-green-600 text-white py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
