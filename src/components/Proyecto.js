import React from 'react'
import { useParams } from 'react-router-dom'

export const Proyecto = () => {

// recoger parametro por url
const param= useParams(); 

    return (
        <div className='page'>
            <h1 className='heading'>Proyecto: {param.id}</h1>
        </div>
    )
}
