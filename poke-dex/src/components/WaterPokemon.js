import React, { useState, useEffect } from 'react'
import axios from 'axios'



const WaterPokemon = () => {

  let pokemon = 'charmander'
  const [data, setData] = useState(null)
  const [evolution, setEvolution] = useState('water-pokemon-img-1')
   

  const getData = async () => {
    const response = await axios.get(`https://pokeapi.glitch.me/v1/pokemon/${pokemon}`)
    setData(response)
  }

  useEffect(() => {

    // getData()
  }, [])

    console.log('data>.', data)
  
  const evoOne = () => {
    pokemon = 'squirtle'
    // getData()
    setEvolution('water-pokemon-img-1')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }
 
  const evoTwo = () => {
    pokemon = 'wartortle'
    // getData()
    setEvolution('water-pokemon-img-2')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }
  const evoThree = () => {
    pokemon = 'blastoise'
    // getData()
    setEvolution('water-pokemon-img-3')
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)
  }
 

  return (
      <div className='card-container'>
        <button className='pokeball' onClick={evoOne}></button>
        <button className='greatball' onClick={evoTwo}> </button>
        <button className='ultraball' onClick={evoThree}></button>
      <div className='card-holder'></div>
      <div className='pokemon-card'></div>
      <div className={evolution}></div>
      <div className='attributes'></div>
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
          )
        }

export default WaterPokemon;