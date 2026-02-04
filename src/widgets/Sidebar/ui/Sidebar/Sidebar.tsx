import { useState } from 'react';
import cl from './Sidebar.module.scss'
import { classNames } from '@src/shared/helpers/classNames/classNames'
import { Button } from '@src/shared/ui/Button/Button';
import { ThemeSwitcher } from '@src/widgets/ThemeSwitcher';

interface props{
    className?: string;
}
export const Sidebar = ({className}:props) => {
    const [isCollapsed, setCollapsed] = useState(false);
    const onToggle = ()=>{
        setCollapsed(!isCollapsed)
    }
    return (
        <div className={ classNames(cl.sidebar, {[cl.collapsed]: isCollapsed}, [className]) }>
            <Button onClick={onToggle}>Toggle</Button>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                {/* LangSwitcher */}
            </div>
        </div>
    )
}