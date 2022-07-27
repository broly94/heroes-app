import React from 'react'
import { HeroesList } from '../components'

export const Dc = () => {
  return (
    <>
      <h1>Listado de Heroes de DC Comics</h1>
      <hr />
      <HeroesList comic={'DC Comics'} />
    </>

  )
}
