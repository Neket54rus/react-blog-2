type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
type TextWeight = 'light' | 'normal' | 'bold'

export interface TextProps {
    className?: string
    text: string
    size?: TextSize
    weight?: TextWeight
}
