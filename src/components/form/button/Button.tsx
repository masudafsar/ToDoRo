import React from 'react';
import cn from "classnames";

import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    return (
        <button
            ref={ref}
            className={cn(styles.Button, props.className)}
            {...props}
        >
            {props.children}
        </button>
    );
});
