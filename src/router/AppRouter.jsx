import { Route, Routes } from 'react-router-dom'

import { Login } from '../auth'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="login/*" element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
        />


        <Route path="/*" element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        } />

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={ <HeroesRoutes />} /> */}



      </Routes>
    </>
  )
}