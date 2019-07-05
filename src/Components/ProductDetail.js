import React from 'react'
import { Image } from 'semantic-ui-react'

export default function ProductDetail({ product }) {
  return <Image src={product.image} style={{ marginTop: '2em' }} />
}
