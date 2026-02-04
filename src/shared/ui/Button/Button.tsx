import cl from './Button.module.scss'
import { classNames } from '@src/shared/helpers/classNames/classNames'

export enum ThemeButton {
    CLEAR = "clear",

}


interface props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ThemeButton;
}
export const Button = (props:props) => {
    const {theme, children, className, ...otherProps} = props;
    return (
        <button className={ classNames(cl.button, {}, [className, cl[theme]]) } {...otherProps}>
            {children}
        </button>
    )
}