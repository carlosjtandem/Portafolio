import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    // recoger parametro por url
    const param = useParams();
    const [proyecto, setProyecto] = useState({});

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === param.id)
        setProyecto(proyecto[0]);
        console.log(proyecto[0]);
    }, []);
    return (
        <div className='page'>
            <h1 className='heading'>Proyecto:{param.id} </h1>
            <h3>{proyecto.detail}</h3>
        </div>
    )
}
