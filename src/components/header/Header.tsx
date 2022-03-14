import React from 'react';

import styles from './Header.module.scss';
import {Container} from "../container/Container";

interface Props {
}

export const Header: React.FC<Props> = () => {
    return (
        <header className={styles.Header}>
            <Container className={styles.Container}>
                <h1 className={styles.Title}>Task Management</h1>
            </Container>
        </header>
    );
}
