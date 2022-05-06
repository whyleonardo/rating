import { Button } from "./Button";
import starImg from '../assets/icon-star.svg'
import { useState } from "react";



export function Feedback() {
  const [feedback, setFeedback] = useState<boolean>(false)
  const [value, setValue ] = useState('')

  async function handleFeedback() {
     const trueFeedback =  await setFeedback(true)
    
     return trueFeedback
}

  return (
    <div className="rating">
        <button className='star-icon'>
          <img src={starImg} alt="" />
        </button>

        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className='buttons'>
          <Button onClick={setValue} title='1'/>
          <Button title='2'/>
          <Button title='3'/>
          <Button title='4'/>
          <Button title='5'/>
        </div>

        <Button className="submit" onFeedbackSent={() => setFeedback(false)} type='submit' title="SUBMIT"/>
    </div>
  )
}

