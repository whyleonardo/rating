import { useState } from 'react'
import { Button } from './components/Button'
import starImg from './assets/icon-star.svg'
import { ThankYou } from './components/ThankYou'
import { Feedback } from './components/Feedback'

function App() {
  const [feedback, setFeedback] = useState<boolean>(false)



  return (
    <div className="container">
      
      {!feedback ? <Feedback/> : <ThankYou/>}
      
    </div>
  )
}

export default App
