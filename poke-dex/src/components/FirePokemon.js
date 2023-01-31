import React, { useState, useEffect } from 'react'
import axios from 'axios'


const FirePokemon = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://cors-anywhere-herokuapp.com/https://pokeapi.glitch.me/v1/pokemon/3")
      setData(response)
    }
    getData()
  }, [])
  console.log('data>>', data)
}

export default FirePokemon