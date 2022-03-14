import React, {useState} from "react";
import {TasksContext} from "./TasksContext";
import {Task} from "../types/task";

interface Props {
}

export const TasksProvider: React.FC<Props> = ({children}) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [lastId, setLastId] = useState(0);

    const handleAddTask = (task: Task) => {
        task.id = lastId + 1;
        setLastId(prevState => prevState + 1);
        setTasks(prevState => {
            return [
                task,
                ...prevState,
            ]
        });
    }
    const handleEditTask = (task: Task) => {
        setTasks(prevState => {
            const newState = [...prevState];
            const index = newState.findIndex(item => item.id === task.id);
            newState[index] = task;
            return newState;
        })
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
