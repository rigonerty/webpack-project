import { Link, LinkProps } from 'react-router-dom';
import cl from './AppLink.module.scss'
import { classNames } from '@src/shared/helpers/classNames/classNames'
import { ReactNode } from 'react';


export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

interface props extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}
export const AppLink = (props:props) => {
    const {
        to,
        theme = AppLinkTheme.PRIMARY,
        children, 
        className,
        ...otherProps } = props;

    return (
        <Link 
            className={ classNames(cl.appLink, {}, [className, cl[theme]]) }
            to={to}
            {...otherProps}>

            {children}

        </Link>
    )
}
