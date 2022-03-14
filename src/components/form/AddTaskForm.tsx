import React, {useContext} from 'react';

import styles from './AddTaskForm.module.scss';
import {TextInput} from "./input/TextInput";
import {TextArea} from "./input/TextArea";
import {Button} from "./button/Button";
import {Icon} from "@iconify/react";
import AddIcon from "@iconify/icons-ic/twotone-add";
import {TasksContext} from "../../contexts/TasksContext";
import {Task} from "../../types/task";
import {SubmitHandler, useForm} from "react-hook-form";

interface Props {

}

export const AddTaskForm: React.FC<Props> = ({}) => {
    const {addTask} = useContext(TasksContext);
    const {register, handleSubmit, setValue} = useForm<Task>({
        defaultValues: {
            status: "To Do",
        }
    });

    const onSubmit: SubmitHandler<Task> = (data) => {
        addTask(data);
        setValue('title', undefined);
        setValue('description', undefined);
    }

    return (
        <form className={styles.AddTaskForm} onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                placeholder="Title"
                {...register('title')}
            />
            <TextArea
                placeholder="Description"
                rows={5}
                {...register('description')}
            />
            <Button type="submit">
                <span>Add</span>
                <Icon icon={AddIcon}/>
            </Button>
        </form>
    );
}
