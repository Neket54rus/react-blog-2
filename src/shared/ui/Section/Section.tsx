import { FC } from 'react'

import { classNames } from '@/shared/lib/classNames'

import { SectionProps } from './types/Section'

import * as classes from './Section.module.scss'

export const Section: FC<SectionProps> = ({ children, className }) => {
	return <section className={classNames(classes.Section, {}, [className])}>{children}</section>
}
