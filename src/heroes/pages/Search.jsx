import React from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse(location.search);

  const {searchText, onInputChange, onResetForm} = useForm({
    searchText: ''
  })

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.trim().length <= 1) return;
    onResetForm();
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

          <div className="alert alert-primary mt-3 text-center fw-bold">Buscando su heroe</div>
          <div className="alert alert-danger mt-3 text-center fw-bold">No existe Heroe para: <b> {q} </b></div>

          </div>
        </div>
    </>
  )
}
