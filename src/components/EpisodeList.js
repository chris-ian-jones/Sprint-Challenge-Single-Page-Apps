import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
          setData(response.data.results)
          console.log('axios episodes:', response.data.results)
        })

  }, [])

  return (
  
    <section className='episode-list grid-view'>
      {data.map(episode => 
        <EpisodeCard 
          key={episode.id}
          name={episode.name}
          episode={episode.episode}
          airDate={episode.air_date}
        />
      )}
    </section>
  );
}
