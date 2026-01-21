


interface IMods{
    [key: string]: boolean | string;
}


export function classNames(cls:string, mods:IMods, additional: string[]): string{
    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, val])=> Boolean(val))
            .map(([className])=> className),
        ...additional,
    ].join(" ");
}


classNames("", {name:true, key: "false"}, [])