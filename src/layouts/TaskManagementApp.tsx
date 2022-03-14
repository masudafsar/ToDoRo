import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Header} from "../components/header/Header";
import {HomePage} from "../Pages/home/HomePage";

import styles from './TaskManagementApp.module.scss';

interface Props {
}

export const TaskManagementApp: React.FC<Props> = () => {
    return (
        <div className={styles.TaskManagementApp}>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/edit/:taskId" element={null} />
            </Routes>
        </div>
    );
}
