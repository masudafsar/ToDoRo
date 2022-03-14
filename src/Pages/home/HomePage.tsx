import React from 'react';

import styles from './HomePage.module.scss';
import {Container} from "../../components/container/Container";

export const HomePage: React.FC = () => {
    return (
        <div className={styles.HomePage}>
            <Container>
                <h2 className={styles.Title}>Tasks</h2>
            </Container>
        </div>
    );
}
