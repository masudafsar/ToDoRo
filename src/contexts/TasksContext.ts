import React from 'react';
import {Task} from '../types/task';

export interface ITasksContext {
    addTask: (task: Task) => void;
    editTask: (task: Task) => void;
    getTasks: () => Task[] | undefined;
    getTask: (id: number) => Task | undefined;
}

export const TasksContext = React.createContext<ITasksContext>({
    addTask: task => {
    },
    editTask: task => {
    },
    getTasks: () => undefined,
    getTask: (id) => undefined
});
