import '../button.css'

interface ButtonProps {
  type?: string;
  title?: any;
  className?: string
}

export function Button(props: ButtonProps) {
  return (
    <div>
      <button title='' className={props.className} type="button">{props.title}</button>
    </div>
  )
}