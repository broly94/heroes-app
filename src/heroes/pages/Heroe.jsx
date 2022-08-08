import React from 'react'
import { useMemo } from 'react';

import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../helpers/getHeroesById.js';

export const Heroe = () => {

  const { id } = useParams();

  const heroe = useMemo(() => getHeroesById(id), [id]);
  
  const navigate = useNavigate();

  const onNavigateBack = () => {
    return navigate(-1)
  }

  if (heroe === undefined) {
    return <Navigate to={'/404'} />
  }

  return (
    <>
      <div className="row mt-5 animate__animated animate__fadeInLeft">
        <div className="col-4">
          <img src={`/images/heroes/${id}.jpg`}
            className='img-thumbnail'
            alt={heroe.superhero}
          />
        </div>
        <div className="col-8">
          <h5 className="text-center p-3 text-uppercase fs-3 fw-1">{heroe.superhero}</h5>
          <ul className="list-group list-group-flush">
            <li className='list-group-item'><b>Alter ego:</b> {heroe.alter_ego} </li>
            <li className='list-group-item'><b>Publisher:</b> {heroe.publisher} </li>
            <li className='list-group-item'><b>First appearance:</b> {heroe.first_appearance} </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{heroe.characters}</p>
          <button className="btn btn-outline-primary" onClick={onNavigateBack}>Regresar</button>
        </div>
      </div>
    </>
  )
}
