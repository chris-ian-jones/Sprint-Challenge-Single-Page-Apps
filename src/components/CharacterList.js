import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setData(response.data.results)
          console.log('axios:', response.data.results)
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
