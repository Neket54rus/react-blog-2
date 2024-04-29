import { FC, SVGAttributes } from 'react'

type IconTheme = 'dark' | 'light'

export interface IconProps {
    className?: string
    Icon: FC<SVGAttributes<SVGElement>>
    width?: string
    height?: string
    theme?: IconTheme
}
