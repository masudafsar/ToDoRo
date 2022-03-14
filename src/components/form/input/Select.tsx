import React from 'react';

import styles from './Select.module.scss';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
}

export const Select = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
    return (
        <select
            ref={ref}
            className={styles.Select}
            {...props}
        >{props.children}</select>
    );
});
