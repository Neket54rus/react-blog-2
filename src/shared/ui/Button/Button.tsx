import { FC } from 'react'

import { classNames } from '@/shared/lib/classNames'

import { ButtonProps } from './types/button'

import * as classes from './Button.module.scss'

export const Button: FC<ButtonProps> = ({ children, className, ...otherProps }) => {
    return (
        <button className={classNames(classes.Button, {}, [className])} {...otherProps}>
            {children}
        </button>
    )
}
