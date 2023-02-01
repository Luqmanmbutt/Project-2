import React, { useState, useEffect } from 'react'
import axios from 'axios'



const GrassPokemon = () => {

    const [data, setData] = useState(null)
  
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("https://pokeapi.glitch.me/v1/pokemon/3")
        setData(response)
      }
      getData()
    }, [])

    return (

        <div className='home-page'>
          <h1>Grass Pokemon</h1>
          <div className='card-holder'>
            <div className='pokemon-card'>
              <div className='pokemon-img'></div>
              <div className='attributes'>
                <div className='stats'>
                  {data?.data.map(info => {
                    return (
                      <>
                        <p>{info.data}</p>
                        <p>{info.name}</p>
                        <p>{info.types.map(i => {
                          return (
                            <p>{i}</p>
                          )
                        })
                        }
                        </p>
                        <p>{info.description}</p>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
    
          </div>
    
        </div>
    
      )
}

export default GrassPokemon;