import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from './LocationCard';

export default function LocationsList() {
    
    const [data, setData] = useState([])

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(response => {
              setData(response.data.results)
              console.log('axios:', response.data.results)
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
