import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    color?: string;
    onClick: ()=> void;
}
const Btn = ({children,color='danger',onClick}:Props) => {
  return (
    <div className={'btn btn-' +color} onClick={onClick}>{children}</div>
  )
}

export default Btn