import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

// export default function LocationCard ({ name, type, dimension, residents }) {
//   // image={image}
//   return (<span>todo: location</span>
//   )
// }

const LocationCard = (props) => (
  
  <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
       Planet: {props.dimension}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Residents: {props.residents}
      </a>
    </Card.Content>
  </Card>
)

export default LocationCard
