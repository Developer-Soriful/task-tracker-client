import { useState, useEffect } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks, saveTasks } from "../utils/localStorage";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Task Form */}
          <TaskForm setTasks={setTasks} />

          {/* Divider */}
          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Task List */}
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Your Tasks
          </h3>
          <TaskList tasks={tasks} />
        </div>
      </main>
    </>
  );
};

export default Tasks;
