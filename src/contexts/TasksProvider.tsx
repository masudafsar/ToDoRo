import React, {useState} from "react";
import {TasksContext} from "./TasksContext";
import {Task} from "../types/task";

interface Props {
}

export const TasksProvider: React.FC<Props> = ({children}) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (task: Task) => {
        setTasks(prevState => {
            return [
                task,
                ...prevState,
            ]
        })
    }
    const handleEditTask = (task: Task) => {
    }
    const handleGetTasks = () => {
        return tasks;
    }
    const handleGetTask = (id: number) => {
        return tasks.find(task => task.id === id);
    }

    return (
        <TasksContext.Provider value={{
            addTask: handleAddTask,
            editTask: handleEditTask,
            getTasks: handleGetTasks,
            getTask: handleGetTask,
        }}>
            {children}
        </TasksContext.Provider>
    );
}
