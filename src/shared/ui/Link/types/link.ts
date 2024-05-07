import { LinkProps as RouterLinkProps } from 'react-router-dom'

export interface LinkProps extends RouterLinkProps {
	className?: string
	width?: string
	height?: string
	hover?: boolean
}
