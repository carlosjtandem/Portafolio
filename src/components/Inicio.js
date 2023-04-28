import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hey there, I'm Carlos Javier Aucancela and I'm a <strong>systems engineer</strong>,
        focused on the implementation of custom software in all types of web projects.
      </h1>
      <h2>
        If you want me to help you create your website or web application.<Link to="/contacto">Contact me</Link>
      </h2>
      <section className='ultimosProyectos'>
        <h2 className='heading'>Experience with the following programming languages:</h2>
        <section className="container-images">
          <img className="item" src="/images/angular.png"></img>
          <img className="item" src="/images/csharp.png"></img>
          <img className="item" src="/images/go.png"></img>
          <img className="item" src="/images/react.png"></img>
        
        </section>

        <p>Estos son algunos de mis trabajos</p>

        <div className='works'></div>
      </section>
    </div>
  )
}