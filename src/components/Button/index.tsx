import { SetStateAction } from 'react';
import './button.css'

interface ButtonProps {
  title: string;
  className?: string;
  foo: (title: string) => void
}

export function Button({ title, className, foo }: ButtonProps) {
  return (
    <div>
      <button onClick={() => foo(title)} className={className}>{title}</button>
    </div>
  )
}