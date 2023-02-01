import React, { useState, useEffect } from 'react'
import axios from 'axios'



const GrassPokemon = () => {

    const [data, setData] = useState(null)
  
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("https://pokeapi.glitch.me/v1/pokemon/252")
        setData(response)
      }
      getData()
    }, [])

    return (

        <div className='card-container'>
          <h1>Grass Pokemon</h1>
          <div className='card-holder'>
            <div className='pokemon-card'>
              <div className='grass-pokemon-img'></div>
              <div className='attributes'>
                <div className='stats'>
                  {data?.data.map(info => {
                    return (
                      <>
                    <p key={info.data}>{info.data}</p>
                    <p key={info.name}>{info.name}</p>
                    <p key={info.types}>{info.types.map(i => {
                      return (
                        <p key={i}>{i}</p>
                      )
                    })
                    }
                    </p>
                    <p key={info.description}>{info.description}</p>
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