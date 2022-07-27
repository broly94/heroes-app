import { Navigate, Route, Routes } from 'react-router-dom'

import { Dc, Heroe, Marvel, PageError, Search } from '../pages'
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<Dc />} />
                    <Route path="search" element={<Search />} />
                    <Route path="heroe/:id" element={<Heroe />} />
                    <Route path="404" element={<PageError />} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>

        </>
    )
}
