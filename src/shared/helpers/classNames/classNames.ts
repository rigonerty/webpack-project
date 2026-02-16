


interface IMods{
    [key: string]: boolean | string;
}


export function classNames(cls:string, mods: IMods = {}, additional: string[] = []): string{
    return [
        cls,
        ...Object.entries(mods)
            .filter(([, val])=> Boolean(val))
            .map(([className])=> className),
        ...additional,
    ].join(" ");
}
