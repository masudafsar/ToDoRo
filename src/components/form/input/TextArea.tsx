import React from 'react';

import styles from './TextArea.module.scss';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    return (
        <textarea
            ref={ref}
            className={styles.TextArea}
            {...props}
        />
    );
});
