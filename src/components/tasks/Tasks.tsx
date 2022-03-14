import React from 'react';

import styles from './Tasks.module.scss';
import {Task} from "../../types/task";

interface Props {
    tasks: Task[]
}

export const Tasks: React.FC<Props> = ({tasks}) => {
    return (
        <div className={styles.Tasks}>
            {tasks.map(task => {})}
        </div>
    );
}
