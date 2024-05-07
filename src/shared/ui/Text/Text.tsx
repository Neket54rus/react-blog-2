import { FC } from 'react'

import { classNames } from '@/shared/lib/classNames'

import { TextProps } from './types/text'

import * as classes from './Text.module.scss'

export const Text: FC<TextProps> = (props) => {
	const { className, text, size = 'xs', weight = 'light' } = props

	return <div className={classNames(classes.Text, {}, [className, classes[size], classes[weight]])}>{text}</div>
}
