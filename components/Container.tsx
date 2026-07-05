import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function Container({
  children,
  className = '',
}: Props) {
  return (
    <div
      className={`mx-auto max-w-6xl px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  )
}