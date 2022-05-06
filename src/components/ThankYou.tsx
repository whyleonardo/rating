import phoneImg from '../assets/illustration-thank-you.svg'
import { Button } from './Button'
import '../thankyou.css'

interface ButtonProps {
  type?: string;
  title?: any;
  className?: string;
  onClick?: any;
}

export function ThankYou(props: ButtonProps) {
 return (
  <div className="rating">
      <img src={phoneImg} alt=""/>
      
      <div className='rating-message'>
        {`You selected ${props.title} of 5.`}
      </div>

      <div className='text'>
        <h2 className='title'>Thank You!</h2>
        <p>
          We appreciate you taking the time to give a rating. 
          If you ever need more support, don't hesitate to get in touch
        </p>
      </div>
</div>
      
      
      
      
      
      
  
  )
}