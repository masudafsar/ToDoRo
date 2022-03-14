import React, {useContext} from 'react';

import {Container} from '../../components/container/Container';
import {AddTaskForm} from "../../components/form/AddTaskForm";
import {TasksContext} from "../../contexts/TasksContext";
import {TaskCard} from "../../components/task/TaskCard";

import styles from './HomePage.module.scss';

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
                    {tasks && tasks.length > 0 ? tasks.map(task => (<TaskCard key={task.id} task={task}/>)) : (
                        <div className={styles.Message}>
                            <p>
                                You have nothing to do.
                                <br/>
                                Go get some sleep.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
