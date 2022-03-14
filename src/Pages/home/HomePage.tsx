import React, {useContext} from 'react';

import {Container} from '../../components/container/Container';
import {AddTaskForm} from "../../components/form/AddTaskForm";

import styles from './HomePage.module.scss';
import {TasksContext} from "../../contexts/TasksContext";
import {TaskCard} from "../../components/task/TaskCard";

export const HomePage: React.FC = () => {
    const {getTasks} = useContext(TasksContext);
    const tasks = getTasks();
    return (
        <div className={styles.HomePage}>
            <Container>
                <AddTaskForm/>
            </Container>
            <div className={styles.TasksContainer}>
                <Container>
                    <h2 className={styles.Title}>Tasks</h2>
                </Container>
                <div className={styles.Tasks}>
                    {tasks?.map(task => (<TaskCard key={task.id} task={task}/>))}
                </div>
            </div>
        </div>
    );
}
