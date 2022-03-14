import React from 'react';

import styles from './HomePage.module.scss';
import {Container} from "../../components/container/Container";

export const HomePage: React.FC = () => {
    return (
        <div className={styles.HomePage}>
            <Container>
                <div className={styles.AddTaskForm}>FORM</div>
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
