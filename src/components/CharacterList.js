import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [data, setData] = useState([])

  useEffect(() => {

    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setData(response.data.results)
          console.log('axios character:', response.data.results)
        })

  }, [])

  return (
  
    <section className='character-list grid-view'>
      {data.map(character => 
        <CharacterCard 
          key={character.id}
          name={character.name}
          status={character.status}
          location={character.location.name}
          episodes={character.episodes}
          image={character.image}
          origin={character.origin.name}
        />
      )}
    </section>
    
  );
}
