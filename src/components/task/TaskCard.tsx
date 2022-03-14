import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import EditIcon from "@iconify/icons-ic/twotone-edit";

import {Task} from "../../types/task";

import styles from './TaskCard.module.scss';

interface Props {
    task: Task
}

export const TaskCard: React.FC<Props> = ({task}) => {
    return (
        <div className={styles.TaskCard}>
            <h3 className={styles.Title}>{task.title}</h3>
            <p className={styles.Description}>{task.description}</p>
            <div className={styles.Actions}>
                <span className={styles.Status}>{task.status}</span>
                <Link to={`/edit/${task.id}/`}>
                    <Icon icon={EditIcon}/>
                </Link>
            </div>
        </div>
    );
}
