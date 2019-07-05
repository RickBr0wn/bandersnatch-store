import React from 'react'
import { Grid, Header, Popup, Segment } from 'semantic-ui-react'
import AddToCart from './AddToCart'

const timeoutLength = 2500

export function PopUpConfirmPurchase() {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => {
    setIsOpen(true)
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, timeoutLength)
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, timeoutLength)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = timeout => {
    setIsOpen(false)
    clearTimeout(timeout)
  }
}

class PopUpConfirmPurchase2 extends React.Component {
  handleOpen = () => {
    this.setState({ ...this.state, isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ ...this.state, isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render() {
    const product = {
      name: 'test',
      price: 9,
      img: 'rr'
    }

    console.log(this.props)

    return (
      <Popup
        trigger={<AddToCart product={product} />}
        content={`This message will self-destruct in ${timeoutLength /
          1000} seconds!`}
        on='click'
        open={this.state.isOpen}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        position='top right'
      />
    )
  }
}

export default PopUpConfirmPurchase
