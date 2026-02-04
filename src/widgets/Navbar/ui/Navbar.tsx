import React from 'react'
import { RoutePath } from '@src/shared/config/routerConfig/routerConfig'
import cl from "./Navbar.module.scss"
import { classNames } from '@src/shared/helpers/classNames/classNames'
import { AppLink, AppLinkTheme } from '@src/shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from '@src/widgets/ThemeSwitcher'
import { useTranslation } from 'react-i18next'




interface props{
    className?: string;
}


export const Navbar = ({className}:props) => {
  const { t, i18n } = useTranslation();

  const toggle = ()=>{
    i18n.changeLanguage(i18n.language === "ru"? "en" : "ru");
  }
  
  return (
    <div className={ classNames(cl.navbar, {}, [className]) }>
        <button onClick={toggle}>{t("ChangeLanguage")}</button>
        <div className={cl.links}>
            
            <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>{t("LinkHome") }</AppLink>
            <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>{t("LinkAbout")}</AppLink>
        </div>

    </div>
  )
}


