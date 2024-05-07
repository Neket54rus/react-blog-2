import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames'

import { LinkProps } from './types/link'

import * as classes from './Link.module.scss'

export const Link: FC<LinkProps> = (props) => {
	const { children, className, width, height, hover, ...otherProps } = props

	return (
		<RouterLink
			className={classNames(classes.Link, { [classes.LinkHover]: hover }, [className])}
			style={{ width, height }}
			{...otherProps}
		>
			{children}
		</RouterLink>
	)
}
