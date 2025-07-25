import { useState, useEffect } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks, saveTasks } from "../utils/localStorage";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    saveTasks(updatedTasks);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            {editingTask ? "Edit Task" : "Add New Task"}
          </h2>
    
          {/* Task Form */}
          <TaskForm
            setTasks={setTasks}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />

          {/* Divider */}
          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Task List */}
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Your Tasks
          </h3>
          <TaskList
            tasks={tasks}
            onEdit={setEditingTask}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </>
  );
};

export default Tasks;
