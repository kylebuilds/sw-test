import { FILM_TYPE } from './types'
export const parseFilms = (data: any): FILM_TYPE[] =>{
    if(!data) return []
    const results = data.films.results;
    return results.map((film: any) => {
        return {
            title: film.title,
            releaseDate: film.releaseDate,
            characters: film.characters.results.map((character: any) => character.name),
            planets: film.planets.results.map((planet: any) => planet.name)
        } as FILM_TYPE
    })
}