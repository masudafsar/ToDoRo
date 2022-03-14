import React, {useContext} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Icon} from "@iconify/react";
import AddIcon from "@iconify/icons-ic/twotone-add";

import {TextInput} from "./input/TextInput";
import {TextArea} from "./input/TextArea";
import {Button} from "./button/Button";
import {TasksContext} from "../../contexts/TasksContext";
import {Task} from "../../types/task";
import {TaskStatus} from "../../types/taskStatus";

import styles from './TaskForm.module.scss';

interface Props {

}

export const AddTaskForm: React.FC<Props> = () => {
    const {addTask} = useContext(TasksContext);
    const {register, handleSubmit, setValue} = useForm<Task>({
        defaultValues: {
            status: TaskStatus.toDo,
        }
    });

    const onSubmit: SubmitHandler<Task> = (data) => {
        addTask(data);
        setValue('title', undefined);
        setValue('description', undefined);
    }

    return (
        <form className={styles.TaskForm} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.Title}>Add new Task</h3>
            <TextInput
                placeholder="Title"
                {...register('title')}
            />
            <TextArea
                placeholder="Description"
                rows={3}
                {...register('description')}
            />
            <Button type="submit">
                <span>Add</span>
                <Icon icon={AddIcon}/>
            </Button>
        </form>
    );
}
