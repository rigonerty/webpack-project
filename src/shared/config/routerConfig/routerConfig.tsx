import { RouteProps } from "react-router-dom"
import {HomePage} from "@src/pages/HomePage"
import { AboutPage } from "@src/pages/AboutPage"
export enum AppRoutes{
    MAIN = "main",
    ABOUT = "about"
}




export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
}

export const routerConfig: RouteProps[] = [
    {path: RoutePath.main, element: <HomePage/>},
    {path: RoutePath.about, element: <AboutPage/>}
]