
import "./styles/index.scss";
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '@src/shared/helpers/classNames/classNames';

import { AppRouter } from './providers/router';
import { Navbar } from '@src/widgets/Navbar';
import { Sidebar } from '@src/widgets/Sidebar';
import { Suspense } from 'react';




export const App = () => {
 const {theme} = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
        <Suspense fallback="">
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>        
        </Suspense>

    </div>
  )
}
