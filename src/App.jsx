import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import "./App.css";

const INITIAL_TASKS = [
    {
        id: "1",
        title: "Implement secure user authentication",
        priority: "High",
        completed: false,
        createdAt: Date.now() - 2 * 60 * 60 * 1000,
    },
    {
        id: "2",
        title: "Develop responsive admin dashboard",
        priority: "High",
        completed: false,
        createdAt: Date.now() - 5 * 60 * 60 * 1000,
    },
    {
        id: "3",
        title: "Integrate REST API for task management",
        priority: "High",
        completed: true,
        createdAt: Date.now() - 8 * 60 * 60 * 1000,
    },
    {
        id: "4",
        title: "Implement role-based access control",
        priority: "High",
        completed: false,
        createdAt: Date.now() - 12 * 60 * 60 * 1000,
    },
    {
        id: "5",
        title: "Add server-side input validation",
        priority: "Medium",
        completed: true,
        createdAt: Date.now() - 18 * 60 * 60 * 1000,
    },
    {
        id: "6",
        title: "Optimize database queries and indexing",
        priority: "Medium",
        completed: false,
        createdAt: Date.now() - 24 * 60 * 60 * 1000,
    },
    {
        id: "7",
        title: "Implement automated unit and integration tests",
        priority: "Medium",
        completed: false,
        createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    },
    {
        id: "8",
        title: "Configure production environment variables",
        priority: "Low",
        completed: true,
        createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    },
    {
        id: "9",
        title: "Set up CI/CD pipeline for production deployment",
        priority: "High",
        completed: false,
        createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
    },
    {
        id: "10",
        title: "Monitor application performance and error logs",
        priority: "Low",
        completed: false,
        createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
    },
];
function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("devtask_tasks");
        return saved ? JSON.parse(saved) : INITIAL_TASKS;
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("devtask_theme") || "dark";
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem("devtask_tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("devtask_theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const addTask = (title, priority) => {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            priority,
            completed: false,
            createdAt: Date.now(),
        };
        setTasks((prev) => [newTask, ...prev]);
    };

    const completeTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task,
            ),
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch = task.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesPriority =
            priorityFilter === "All" || task.priority === priorityFilter;
        const matchesStatus =
            statusFilter === "All" ||
            (statusFilter === "Completed" && task.completed) ||
            (statusFilter === "Pending" && !task.completed);

        return matchesSearch && matchesPriority && matchesStatus;
    });

    return (
        <div className="app-container">
            <div className="ambient-blur ambient-blur-1"></div>
            <div className="ambient-blur ambient-blur-2"></div>

            <Header theme={theme} onToggleTheme={toggleTheme} />

            <main className="app-main">
                <TaskStats tasks={tasks} />

                <TaskForm onAddTask={addTask} />

                <TaskFilters
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    priorityFilter={priorityFilter}
                    onPriorityChange={setPriorityFilter}
                    statusFilter={statusFilter}
                    onStatusChange={setStatusFilter}
                />

                <TaskList
                    tasks={filteredTasks}
                    onComplete={completeTask}
                    onDelete={deleteTask}
                />
            </main>
        </div>
    );
}

export default App;
