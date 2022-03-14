import React from 'react';

import styles from './TextInput.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <input
            ref={ref}
            className={styles.TextInput}
            {...props}
            type="text"
        />
    );
})
