import { heroes } from '../data/heroes'

export const getHeroesByComic = (comic) => {

  const arrayComics = ['DC Comics', 'Marvel Comics']
  if(!arrayComics.includes(comic)) {
    throw new Error('Error: Invalid')
  }

  return heroes.filter( heroe => heroe.publisher === comic );

}

