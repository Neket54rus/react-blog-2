import { PropsWithChildren } from 'react'

export interface ButtonProps extends PropsWithChildren {
    className?: string
    onClick?: () => void
}
