import React from 'react';

import {Container} from '../../components/container/Container';
import {AddTaskForm} from "../../components/form/AddTaskForm";

import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
    return (
        <div className={styles.HomePage}>
            <Container>
                <AddTaskForm/>
            </Container>
            <div className={styles.TasksContainer}>
                <Container>
                    <h2 className={styles.Title}>Tasks</h2>
                </Container>
                <div className={styles.Tasks}></div>
            </div>
        </div>
    );
}
