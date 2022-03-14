import React from 'react';
import cn from "classnames";

import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    full?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    return (
        <button
            className={props.full ? styles.Button : cn(styles.Button, styles.FullButton)}
            {...props}
        >
            {props.children}
        </button>
    );
});
