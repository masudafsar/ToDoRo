import React from 'react';
import {Icon} from '@iconify/react';
import AddIcon from '@iconify/icons-ic/twotone-add';

import {Container} from '../../components/container/Container';
import {TextInput} from '../../components/form/input/TextInput';
import {TextArea} from '../../components/form/input/TextArea';
import {Button} from '../../components/form/button/Button';

import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
    return (
        <div className={styles.HomePage}>
            <Container>
                <div className={styles.AddTaskForm}>
                    <TextInput placeholder="Title"/>
                    <TextArea placeholder="Description" rows={5}/>
                    <Button>
                        <span>Add</span>
                        <Icon icon={AddIcon}/>
                    </Button>
                </div>
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
