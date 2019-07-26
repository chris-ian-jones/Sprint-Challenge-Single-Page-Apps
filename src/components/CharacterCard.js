import React from 'react'
import { Divider } from 'semantic-ui-react';

// export default function CharacterCard ({ props }) {
//   return (
//     <div>
//       <p>name: {props.name}</p>
//       <p>status: {props.status}</p>
//       <p>location: {props.location}</p>
//       <p>episodes: {props.epsiodes}</p>
//       <p>image: {props.image}</p>
//     </div>
  
//     )
// }

const CharacterCard = (props) => (
  <div>
  <p>name: {props.name}</p>
         <p>status: {props.status}</p>
         <p>location: {props.location}</p>
         <p>episodes: </p>
         <p>image: {props.image}</p>
       </div>
)

export default CharacterCard
