import { routerConfig } from '@src/shared/config/routerConfig/routerConfig'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div><h2>Loading...</h2></div>}>
        <Routes>
            { routerConfig.map((val)=> 
                <Route 
                  path={val.path} 
                  element={ 
                    <div className='page-wrapper'>{val.element}</div>
                  } 
                  key={val.path}/>) }
        </Routes>
    </Suspense>
  )
}

