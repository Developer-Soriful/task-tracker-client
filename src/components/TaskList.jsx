import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react"; // import useCallback
import { fetchTasks } from "../features/taskSlice";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  // Fetch tasks on mount
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Create a memoized refetch function to pass to TaskItem
  const refetch = useCallback(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  console.log(tasks);
  
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100 text-gray-700 text-sm sm:text-base">
          <tr>
            <th className="border px-2 py-2 text-left">Title</th>
            <th className="border px-2 py-2 text-left hidden sm:table-cell">
              Description
            </th>
            <th className="border px-2 py-2 text-left">Due Date</th>
            <th className="border px-2 py-2 text-left">Status</th>
            <th className="border px-2 py-2 text-left">Priority</th>
            <th className="border px-2 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-blue-600">
                Loading...
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-red-500">
                Error: {error}
              </td>
            </tr>
          ) : tasks?.length > 0 ? (
            tasks.map((task , index) => (
              <TaskItem key={index} task={task} refetch={refetch} />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
