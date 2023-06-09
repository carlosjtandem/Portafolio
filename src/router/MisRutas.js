import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Curriculum } from '../components/Curriculum'
import { Servicios } from '../components/Servicios'
import { Portafolio } from '../components/Portafolio'
import { NotFound } from '../components/NotFound'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'
import { Proyecto } from '../components/Proyecto'


export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* header y navegación */}
            <HeaderNav />
            {/* contenido central */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to="/inicio"/>}/>  {/*se usa navigate para que cuando este en root marque seleccionado Inicio con hover color naranja*/}
                    <Route path='/inicio' element={<Inicio />}></Route>
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/proyecto/:id' element={<Proyecto />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </section>
            {/* footer */}
            <Footer />
        </BrowserRouter>
    )
}
