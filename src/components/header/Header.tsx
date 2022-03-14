import React from 'react';
import {Icon} from '@iconify/react';
import AddIcon from '@iconify/icons-ic/twotone-add';

import styles from './Header.module.scss';
import {Container} from "../container/Container";

interface Props {
}

export const Header: React.FC<Props> = ({}) => {
    return (
        <header className={styles.Header}>
            <Container className={styles.Container}>
                <h1 className={styles.Title}>Task Management</h1>
                {/*<button className={styles.IconButton}>
                    <Icon icon={AddIcon}/>
                </button>*/}
            </Container>
        </header>
    );
}
