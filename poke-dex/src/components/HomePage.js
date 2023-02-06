import React from 'react'
import FirePokemon from './FirePokemon'
import GrassPokemon from './GrassPokemon'
import WaterPokemon from './WaterPokemon'

const HomePage = () => {

  return (
    <>

    <div className='card-section'> 
      <FirePokemon />
      <WaterPokemon />
      <GrassPokemon />
    </div>
    </>
  )

}

export default HomePage;