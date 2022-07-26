import { useState } from "react";
import { Rating } from "../Rating";
import { ThankYou } from '../ThankYou';


export function Feedback() {
  const [feedbackIsSent, setFeedbackIsSent] = useState(false)
  const [rating, setRating] = useState('')

  function handleGiveRating(ratingValue: string) {
    const newRating = ratingValue
    setRating(newRating)
  }

  return (
    <div className="rating">
      {feedbackIsSent ? <ThankYou rating={rating} /> : <Rating handleGiveRating={handleGiveRating} setFeedbackIsSent={setFeedbackIsSent} />}
    </div>
  )
}

