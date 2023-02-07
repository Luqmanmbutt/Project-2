import React, { useState, useEffect } from 'react'
import axios from 'axios'



const GrassPokemon = () => {

  let pokemon = 'Bulbasaur'
  const [data, setData] = useState(null)
  const [evolution, setEvolution] = useState('grass-pokemon-img-1')
   


  const getData = async () => {
    const response = await axios.get(`https://pokeapi.glitch.me/v1/pokemon/${pokemon}`)
    setData(response)
  }

  useEffect(() => {

    getData()
  }, [])

  const splice = () => {
    data?.data.splice(1)
  }

    console.log('data>.', data)
  
  const evoOne = () => {
    pokemon = 'Bulbasaur'
    getData()
    setEvolution('grass-pokemon-img-1')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }
 
  const evoTwo = () => {
    pokemon = 'ivysaur'
    getData()
    setEvolution('grass-pokemon-img-2')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }
  const evoThree = () => {
    pokemon = 'venusaur'
    getData()
    setEvolution('grass-pokemon-img-3')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }
 splice()

 return (
  <div className='card-container3'>
    <div className='card-holder'>
      <div className='pokemon-image3'>
        <div className='buttons'>
          <button className='pokeball' onClick={evoOne}></button>
          <button className='greatball' onClick={evoTwo}> </button>
          <button className='ultraball' onClick={evoThree}></button>
        </div>
        <div className='img-poke'>
          <div className={evolution}></div>
        </div>
      </div>
      <div className='pokemon-data'>
        <div className='stats'>
          {data?.data.map(info => {
            return (
              <>
                <p
                  key={info.data}>
                  {info.data}

                </p>
                <p key={info.name}>
                    {info.name}
                </p>
                <p key={info.types}>
                  {info.types.map(i => {
                    return (
                      <p key={i}>{i}</p>
                    )
                  })
                  }
                </p>
                <p key={info.description}>
                  {info.description}
                </p>
              </>
            )
          })}
        </div>
      </div>
    </div>

  </div>
)
}

export default GrassPokemon;