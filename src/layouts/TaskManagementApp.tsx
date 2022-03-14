import React from 'react';
import {Route, Routes} from 'react-router-dom';

import styles from './TaskManagementApp.module.scss';
import {Header} from "../components/header/Header";
import {HomePage} from "../Pages/home/HomePage";

interface Props {
}

export const TaskManagementApp: React.FC<Props> = ({}) => {
    return (
        <div className={styles.TaskManagementApp}>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </div>
    );
}
