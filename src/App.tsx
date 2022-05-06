import { useState } from 'react'
import { Button } from './components/Button'
import starImg from './assets/icon-star.svg'

function App() {

  return (
    <div className="container">
      <div className="rating">
        <button className='star-icon'>
          <img src={starImg} alt="" />
        </button>

        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className='buttons'>
          <Button title='1'/>
          <Button title='2'/>
          <Button title='3'/>
          <Button title='4'/>
          <Button title='5'/>
        </div>

        <Button className="submit" title="SUBMIT"/>
      </div>
    </div>
  )
}

export default App
