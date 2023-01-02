import { PropsWithChildren, ReactElement, ReactNode, ReactPropTypes } from "react"

interface CardProps extends PropsWithChildren {

}

export function Card({ children }: CardProps) {
    return <div className="bg-card-grey text-text-grey">{children}</div>
}