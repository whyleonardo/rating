import { Dispatch, SetStateAction } from "react"
import { Button } from "../Button"

import starImg from '../../assets/icon-star.svg'

interface RatingProps {
  handleGiveRating: (rating: string) => void
  setFeedbackIsSent: Dispatch<SetStateAction<boolean>>
}

export const Rating = ({ handleGiveRating, setFeedbackIsSent }: RatingProps) => {
  return (
    <div>
      <button className='star-icon'>
        <img src={starImg} alt="" />
      </button>

      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

      <div className='buttons'>
        <Button foo={handleGiveRating} title='1' />
        <Button foo={handleGiveRating} title='2' />
        <Button foo={handleGiveRating} title='3' />
        <Button foo={handleGiveRating} title='4' />
        <Button foo={handleGiveRating} title='5' />
      </div>

      <button className="submit" onClick={() => setFeedbackIsSent(true)}>
        Submit
      </button>
    </div >
  )
}