import React from 'react'
import ListComponent from './ListComponent'
import { Container, Image } from 'semantic-ui-react'
import share from '../Images/share.png'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Container fluid center>
        <Image src={share} size='large' />
      </Container>
      <ListComponent />
    </div>
  )
}
