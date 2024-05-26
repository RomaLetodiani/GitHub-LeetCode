import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
}

const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'cursor-pointer rounded-lg px-5 bg-slate-500 shadow-lg transition-colors duration-500 text-white hover:opacity-90',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
