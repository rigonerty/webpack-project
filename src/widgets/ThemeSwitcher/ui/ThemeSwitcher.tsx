import { useTheme } from '@src/app/providers/ThemeProvider';
import cl from './ThemeSwitcher.module.scss'
import { classNames } from '@src/shared/helpers/classNames/classNames'
import ThemeIcon from "@src/shared/assets/icons/theme-night.svg"
import { Theme } from '@src/app/providers/ThemeProvider';
import { Button, ThemeButton } from '@src/shared/ui/Button/Button';
interface props{
    className?: string;
}
export const ThemeSwitcher = ({className}:props) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button className={ classNames(cl.themeSwitcher, {}, [className]) } onClick={()=>toggleTheme()} theme={ThemeButton.CLEAR}>
            <ThemeIcon width={50} stroke={theme == Theme.DARK? "#9356e2" : "#9c2b02"} fill='transparent'/>
        </Button>
    )
}