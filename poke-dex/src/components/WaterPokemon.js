import React, { useState, useEffect } from 'react'
import axios from 'axios'



const WaterPokemon = () => {

  let pokemon = 'Squirtle'
  const [data, setData] = useState(null)
  const [evolution, setEvolution] = useState('water-pokemon-img-1')
   

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

  
  const evoOne = () => {
    pokemon = 'squirtle'
    getData()
    setEvolution('water-pokemon-img-1')
   
  }
 
  const evoTwo = () => {
    pokemon = 'wartortle'
    getData()
    setEvolution('water-pokemon-img-2')
  
  }
  const evoThree = () => {
    pokemon = 'blastoise'
    getData()
    setEvolution('water-pokemon-img-3')

  }
 splice()

 return (
  <div className='card-container2'>
    <div className='card-holder2'>
      <div className='pokemon-image2'>
        <div className='buttons'>
          <div className='pokeball' onClick={evoOne}></div>
          <div className='greatball' onClick={evoTwo}> </div>
          <div className='ultraball' onClick={evoThree}></div>
        </div>
        <div className='img-poke'>
              <div className='hpbar1'>HP 100</div>
            <div className='pokemon-type2'>
            </div>
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

export default WaterPokemon;