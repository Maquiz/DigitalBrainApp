import React from 'react'
import './style.scss'
import zafClient from '../../zafClient'
import Footer from '../Footer'
import TaskButton from '../Button'

const App = () => {
  const [requester, setRequester] = React.useState(null)

  React.useEffect(async () => {
    zafClient.invoke('resize', { height: '150px' })

    const data = await zafClient.get('ticket.requester')
    const requester = data['ticket.requester']
    setRequester(requester)
  }, [])

  return (
    <div className="App">
      <TaskButton
        name="Refund Stripe Transaction" />
      <TaskButton
        name="Change Shipping Address" />
      <TaskButton
        name="Refund Shopify" />
    </div>
  )
}

export default App
