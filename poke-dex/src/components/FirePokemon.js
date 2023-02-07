import React, { useState, useEffect } from 'react'
import axios from 'axios'


const FirePokemon = () => {


  let pokemon = 'charmander'
  const [data, setData] = useState(null)
  const [evolution, setEvolution] = useState('fire-pokemon-img-1')



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
    pokemon = 'charmander'
    getData()
    setEvolution('fire-pokemon-img-1')
  }
  
  const evoTwo = () => {
    pokemon = 'charmeleon'
    getData()
    setEvolution('fire-pokemon-img-2')
  }
  
  const evoThree = () => {
    pokemon = 'charizard'
    getData()
    setEvolution('fire-pokemon-img-3')
  }

  splice()


  return (
    <div className='card-container1'>
      <div className='card-holder'>
        <div className='pokemon-image1'>
          <div className='buttons'>
            <button className='pokeball' onClick={evoOne}></button>
            <button className='greatball' onClick={evoTwo}> </button>
            <button className='ultraball' onClick={evoThree}></button>
          </div>
          <div className='img-poke'><div>100 p</div>
            <div className='pokemon-type'>
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



export default FirePokemon