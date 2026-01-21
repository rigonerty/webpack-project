import { Link, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter'
import "./styles/index.scss";
import About from './pages/About';
import Home from './pages/Home';
import { AboutPageAsync } from './pages/About.async';
import { HomePageAsync } from './pages/Home.async';
import { Suspense, useContext, useState } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



export const App = () => {
 const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE BLYAAA!</button>
        <h1>Hello world! Bellow are cool paragraph!</h1>
        <p>Cool paragraph</p>
        <Link to={"/"}>to Home</Link>
        <Link to={'/about'}>to About</Link>
        
        <Suspense fallback={<div><h2>Loading...</h2></div>}>
            <Routes>
                <Route path='/about' element={<AboutPageAsync/>}/>
                <Route path="/" element={<HomePageAsync/>}/>
            </Routes>
        </Suspense>


    </div>
  )
}
