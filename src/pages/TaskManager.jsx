import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AddTaskModal from "../components/task/AddTaskModal";
import TaskCard from "../components/task/TaskCard";

import {
  getAllTasks,
  deleteTask,
  searchTasks,
  filterTasks,
} from "../services/taskService";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState("");

  const [selectedPriority, setSelectedPriority] = useState("ALL");
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [sortBy, setSortBy] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    loadTasks(currentPage);
  }, [currentPage, sortBy, sortDirection]);

  const loadTasks = async (page = currentPage) => {
    try {
      const response = await getAllTasks(page, 5, sortBy, sortDirection);

      setTasks(response.data.content);

      setCurrentPage(response.data.number);

      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task);

    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(id);

      alert("Task Deleted Successfully 🎉");

      loadTasks(currentPage);
    } catch (error) {
      console.error(error);

      alert("Failed to delete task");
    }
  };

  const handleSearch = async (e) => {
    const keyword = e.target.value;

    setSearchKeyword(keyword);

    try {
      if (keyword.trim() === "") {
        loadTasks(currentPage);

        return;
      }

      const response = await searchTasks(keyword);

      setTasks(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  const applyFilters = async (priority, status) => {
    try {
      if (priority === "ALL" && status === "ALL") {
        loadTasks(currentPage);

        return;
      }

      const response = await filterTasks(priority, status);

      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePriorityFilter = async (e) => {
    const priority = e.target.value;

    setSelectedPriority(priority);

    await applyFilters(priority, selectedStatus);
  };

  const handleStatusFilter = async (e) => {
    const status = e.target.value;

    setSelectedStatus(status);

    await applyFilters(selectedPriority, status);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleDirection = (e) => {
    setSortDirection(e.target.value);
  };

  return (
    <MainLayout>
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Task Manager</h1>

        <button
          onClick={() => {
            setSelectedTask(null);

            setShowModal(true);
          }}
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold"
        >
          + Add Task
        </button>
      </div>

      {/* Search */}

      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search Tasks..."
          value={searchKeyword}
          onChange={handleSearch}
          className="w-full bg-slate-800 text-white p-4 rounded-lg outline-none"
        />
      </div>

      {/* Filters */}

      <div className="flex gap-4 mb-8">
        <select
          value={selectedPriority}
          onChange={handlePriorityFilter}
          className="bg-slate-800 text-white p-3 rounded-lg"
        >
          <option value="ALL">All Priorities</option>
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select>

        <select
          value={selectedStatus}
          onChange={handleStatusFilter}
          className="bg-slate-800 text-white p-3 rounded-lg"
        >
          <option value="ALL">All Status</option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
      </div>

      {/* Task List */}

      {tasks.length === 0 ? (
        <div className="bg-slate-800 rounded-xl p-8 text-center">
          <h2>No Tasks Found</h2>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Pagination */}

      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-slate-700 px-5 py-2 rounded disabled:opacity-40"
        >
          Previous
        </button>

        <span>
          Page {currentPage + 1} of {totalPages}
        </span>

        <button
          disabled={currentPage + 1 >= totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-cyan-500 px-5 py-2 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <select
          value={sortBy}
          onChange={handleSort}
          className="bg-slate-800 p-3 rounded-lg"
        >
          <option value="id">Latest</option>

          <option value="title">Title</option>

          <option value="priority">Priority</option>

          <option value="dueDate">Due Date</option>

          <option value="createdAt">Created Date</option>
        </select>

        <select
          value={sortDirection}
          onChange={handleDirection}
          className="bg-slate-800 p-3 rounded-lg"
        >
          <option value="asc">Ascending</option>

          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Modal */}

      <AddTaskModal
        isOpen={showModal}
        task={selectedTask}
        onClose={() => {
          setShowModal(false);

          setSelectedTask(null);

          loadTasks(currentPage);
        }}
      />
    </MainLayout>
  );
}

export default TaskManager;
