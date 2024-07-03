import React from 'react';
import '../App/App.css';

const Pokemon = ({ listaPokemon }) =>{

    return(
        <div className='contenedor-pokemon'>
        <ul>
          {listaPokemon.map((pokemon, index) => {
            return (<li key={index}>
                        <button>
                            {pokemon.name}
                        </button>
                     </li>
                )
          })}
        </ul>
      </div>
    )

}

export default Pokemon;