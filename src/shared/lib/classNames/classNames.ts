export const classNames = (
    mainClass: string,
    mods: { [name: string]: boolean | string } = {},
    additionalClasses: string[] = [],
): string => {
    return [
        mainClass,
        ...additionalClasses.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ')
}
