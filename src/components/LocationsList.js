import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from './LocationCard';

export default function LocationsList() {
    
    const [data, setData] = useState([])

    useEffect(() => {
    
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(response => {
              setData(response.data.results)
              console.log('axios loction:', response.data.results)
            })
    
    }, [])

    return (
    
        <section className='location-list grid-view'>
            {data.map(location => 
                <LocationCard 
                    key={location.id}
                    name={location.name}
                    dimension={location.dimension}
                    residents={location.residents.length}
                />
            )}
        </section>
    
    );
}
