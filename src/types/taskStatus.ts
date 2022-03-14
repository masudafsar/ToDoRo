export enum TaskStatus {
    toDo = "To Do",
    inProgress = "In Progress",
    blocked = "Blocked",
    inQa = "In QA",
    done = "Done",
    deployed = "Deployed",
}

export const getNextTaskStatuses = (currentStatus: TaskStatus): TaskStatus[] => {
    switch (currentStatus) {
        case TaskStatus.toDo:
            return [TaskStatus.inProgress];
        case TaskStatus.inProgress:
            return [TaskStatus.blocked, TaskStatus.inQa];
        case TaskStatus.blocked:
            return [TaskStatus.toDo];
        case TaskStatus.inQa:
            return [TaskStatus.toDo, TaskStatus.done];
        case TaskStatus.done:
            return [TaskStatus.deployed];
        case TaskStatus.deployed:
            return [];
        default:
            return [TaskStatus.toDo]
    }
}
