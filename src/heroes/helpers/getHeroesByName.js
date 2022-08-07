import { heroes } from '../data/heroes'

export const getHeroesByName = (name) => {

    name = name.toLowerCase().trim();

    if(name.length <= 1) return [];

    return heroes.filter( heroe => heroe.superhero.toLocaleLowerCase().trim().includes(name));
}