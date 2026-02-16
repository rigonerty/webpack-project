import { RoutePath } from '@src/shared/config/routerConfig/routerConfig'
import cl from "./Navbar.module.scss"
import { classNames } from '@src/shared/helpers/classNames/classNames'
import { AppLink, AppLinkTheme } from '@src/shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'




interface props{
    className?: string;
}


export const Navbar = ({className}:props) => {
    const { t} = useTranslation();

    
    return (
        <div className={ classNames(cl.navbar, {}, [className]) }>
            <div className={cl.links}>
                
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>{t("LinkHome") }</AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>{t("LinkAbout")}</AppLink>
            </div>

        </div>
    )
}


