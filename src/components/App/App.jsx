import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

const App = () => {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [detallePokemon, setDetallePokemon] = useState({});
  const [cargado, setCargado] = useState(false);

  const cargarPokemon = async () =>{
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=807";
 
    try{
      const request = await axios.get(URL);
      setListaPokemon(request.data.results);
      setCargado(true);
    }
    catch(error){
      console.log("Ocurrió un error", error);
    }
  };

  
  return (
    <>
      <button className='fetchBtn' onClick={cargarPokemon}>Fetch Pokemon</button>
      {cargado && <Pokemon listaPokemon={listaPokemon}/>}
    </>
  )
}

export default App
