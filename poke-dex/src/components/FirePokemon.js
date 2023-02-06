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

  console.log('data>.', data)

  const evoOne = () => {
    pokemon = 'charmander'
    getData()
    setEvolution('fire-pokemon-img-1')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }

  const evoTwo = () => {
    pokemon = 'charmeleon'
    getData()
    setEvolution('fire-pokemon-img-2')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }
  const evoThree = () => {
    pokemon = 'charizard'
    getData()
    setEvolution('fire-pokemon-img-3')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }


  return (
    <div className='card-container'>
      <div className='buttons'>
        <button className='pokeball' onClick={evoOne}></button>
        <button className='greatball' onClick={evoTwo}> </button>
        <button className='ultraball' onClick={evoThree}></button>
      </div>
      <div className='card-holder'>
        <div className='pokemon-image'>
          <div className={evolution}></div>
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
                    <span>
                      Name: 
                    </span>
                    <span>
                      {info.name}
                    </span>
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