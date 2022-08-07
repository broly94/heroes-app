import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers/getHeroesByName'
import { HeroesCard } from '../components/HeroesCard'

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = useMemo(() => getHeroesByName(q), [q]);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;


  const { searchText, onInputChange } = useForm({
    searchText: q
  })


  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }


  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="fs-3 fw-3 text-center mb-5">Busca a tu heroe favorito</h3>
          <form className="d-flex" onSubmit={onSearchSubmit}>
            <button
              className='btn btn-outline-danger fw-bold'
            >
              Buscar
            </button>
            <input
              type="text"
              className='form-control mx-2'
              autoComplete='off'
              name="searchText"
              placeholder='write your hero'
              value={searchText}
              onChange={onInputChange}
            />
          </form>

          <div className="container">
            <div className="row mt-5 p-3">
              {/* {
                (q === '')
                  ? <div className="alert alert-primary mt-3 text-center fw-bold">Busca tu heroe</div>
                  : (heroes.length === 0)
                  && <div className="alert alert-danger mt-3 text-center fw-bold">No existe Heroe para: <b> {q} </b></div>

              } */}

              <div className="alert alert-primary mt-3 text-center fw-bold" style={{ display: showSearch ? '' : 'none'}}>
                Busca tu heroe
              </div>

              <div className="alert alert-danger mt-3 text-center fw-bold" style={{ display: showError ? '': 'none'}}>
                No existe Heroe para: <b> {q} </b>
              </div>

              {heroes.length > 0 && (
                heroes.map(heroe => (
                  <HeroesCard key={heroe.id} {...heroe} />
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
