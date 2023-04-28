import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <h3>Algunas empresas con las que he trabajado</h3>
      <section className='works'>
        {
          trabajos.map(trabajo => {
            return (
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                  <img alt={'image' + trabajo.id} src={"/images/" + trabajo.id + '.png'}></img>
                </div>
                <span>{trabajo.categorias}</span>
                <h2>{trabajo.nombre}</h2>
                <h3>{trabajo.tecnologias}</h3>
                <h3><Link to={"/proyecto/" + trabajo.id}>Más detalles...</Link></h3>
              </article>
            )
          })
        }
      </section>
    </div>
  )
}
