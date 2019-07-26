import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

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
  
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.status}</Card.Meta>
      <Card.Description>
        Location: {props.location}<br/>
        Origin: {props.origin}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Epsiodes
      </a>
    </Card.Content>
  </Card>
)

export default CharacterCard
