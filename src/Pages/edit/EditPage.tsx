import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import {Task} from "../../types/task";
import {TasksContext} from "../../contexts/TasksContext";
import {Container} from "../../components/container/Container";
import {EditTaskForm} from "../../components/form/EditTaskForm";

import styles from './EditPage.module.scss';

export const EditPage: React.FC = () => {
    const params = useParams();
    const taskId = parseInt(`${params.taskId}`)
    const [task, setTask] = useState<Task>();
    const {getTask} = useContext(TasksContext);

    useEffect(() => {
        setTask(getTask(taskId));
    }, [taskId, getTask])

    return (
        <div className={styles.EditPage}>
            <Container>
                {task ? (<EditTaskForm task={task}/>) : (
                    <>
                        <p>Something went wrong</p>
                        <Link to="/">Back</Link>
                    </>
                )}
            </Container>
        </div>
    );
}
