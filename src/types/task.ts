export interface Task {
    id?: number;
    title?: string;
    description?: string;
    status: "To Do" | "In Progress" | "Blocked" | "In QA" | "Done" | "Deployed";
}
