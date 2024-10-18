import Link from 'next/link'
import { buttonVariants } from './ui/button'

const Button = ({href} : {href: string}) => {
  return (
    <Link href={href} className={buttonVariants({ variant: "outline" })}>Click here</Link>
  )
}

export default Button