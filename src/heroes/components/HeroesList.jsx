import React, { useMemo } from 'react'
import { getHeroesByComic } from '../helpers/getHeroesByComic'
import { HeroesCard } from './HeroesCard'

export const HeroesList = ({ comic }) => {

    const heroes = useMemo(() => getHeroesByComic(comic), [comic]);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map( heroe => (
                    <HeroesCard 
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    )
}
