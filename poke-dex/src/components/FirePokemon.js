import React, { useState, useEffect } from 'react'
import axios from 'axios'


const FirePokemon = () => {

  let pokemon = 'charmander'
  const [data, setData] = useState(null) 

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://pokeapi.glitch.me/v1/pokemon/${pokemon}`)
      setData(response)
    }
    getData()
  }, [])
console.log('data>.', data)
  
  const nextGen = () => {
    pokemon = 'charmeleon'
    console.log('pokemon>', pokemon)
    console.log('data next gen>.', data)

  }


  // const prevGen = () => {

  //   console.log('GEN DOWN')
  // }

  return (
      <div className='card-container'>
        <button className='genup' onClick={nextGen}></button>
        <button className='genup' onClick={nextGen}> </button>
        <button className='genup' onClick={nextGen}></button>
      <div className='card-holder'></div>
      <div className='pokemon-card'></div>
      <div className='fire-pokemon-img'></div>
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



export default FirePokemon