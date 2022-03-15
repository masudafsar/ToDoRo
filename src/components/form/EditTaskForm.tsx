import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {SubmitHandler, useForm} from "react-hook-form";
import {Icon} from "@iconify/react";
import EditIcon from "@iconify/icons-ic/twotone-edit";

import {TextInput} from "./input/TextInput";
import {TextArea} from "./input/TextArea";
import {Button} from "./button/Button";
import {TasksContext} from "../../contexts/TasksContext";
import {Task} from "../../types/task";
import {Select} from "./input/Select";
import {getNextTaskStatuses} from "../../types/taskStatus";

import styles from './TaskForm.module.scss';

interface Props {
    task: Task;
}

export const EditTaskForm: React.FC<Props> = ({task}) => {
    const navigate = useNavigate();
    const {editTask} = useContext(TasksContext);
    const {register, handleSubmit} = useForm<Task>({
        defaultValues: task,
    });
    const nextTaskStatuses = getNextTaskStatuses(task.status);

    const onSubmit: SubmitHandler<Task> = (data) => {
        editTask(data);
        navigate('/');
    }

    return (
        <form className={styles.TaskForm} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.Title}>Edit Task</h3>
            <TextInput
                placeholder="Title"
                {...register('title')}
            />
            <TextArea
                placeholder="Description"
                rows={10}
                {...register('description')}
            />
            <Select
                {...register("status")}
            >
                <option value={task.status}>{task.status}</option>
                {nextTaskStatuses.map(status => (
                    <option
                        key={status}
                        value={status}
                    >
                        {status}
                    </option>
                ))}
            </Select>
            <div className={styles.Actions}>
                <Button type="submit">
                    <span>Edit</span>
                    <Icon icon={EditIcon}/>
                </Button>
                <Button
                    className={styles.CancelButton}
                    type="button"
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    <span>Cancel</span>
                </Button>
            </div>
        </form>
    );
}
