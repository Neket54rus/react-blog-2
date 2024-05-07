import { FC, memo } from 'react'

import { classNames } from '@/shared/lib/classNames'

import { IconProps } from './types/icon'

import * as classes from './Icon.module.scss'

export const Icon: FC<IconProps> = memo((props) => {
    const { className, Icon, width, height, theme } = props

    return (
        <div
            className={classNames(
                classes.Icon,
                {
                    [classes.IconLight]: theme === 'light',
                    [classes.IconDark]: theme === 'dark',
                },
                [className],
            )}
            style={{ width, height }}
        >
            <Icon />
        </div>
    )
})

Icon.displayName = 'Icon'
