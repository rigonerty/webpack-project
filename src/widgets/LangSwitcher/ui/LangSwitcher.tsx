import { useTranslation } from 'react-i18next';
import cl from './LangSwitcher.module.scss'
import { classNames } from '@src/shared/helpers/classNames/classNames'
import { Button, ThemeButton } from '@src/shared/ui/Button/Button';

interface props{
    className?: string;
}
export const LangSwitcher = ({className}:props) => {
      const { t, i18n } = useTranslation();
    
      const toggle = ()=>{
        i18n.changeLanguage(i18n.language === "ru"? "en" : "ru");
      }
    return (
            <Button 
            onClick={toggle} 
            theme={ThemeButton.CLEAR}
            className={ classNames(cl.langSwitcher, {}, [className]) }>
                {t("ChangeLanguage")}
            </Button>
    )
}