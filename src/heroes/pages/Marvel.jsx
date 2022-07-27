import React from 'react'
import { HeroesList } from '../components'

export const Marvel = () => {
  return (
    <>
      <h1>Listado de Heroes de Marvel Comics</h1>
      <hr />
      <HeroesList comic={'Marvel Comics'} />
    </>
  )
}
