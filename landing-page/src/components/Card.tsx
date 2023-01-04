import { PropsWithChildren } from "react"

interface CardProps extends PropsWithChildren {
    cardTitle?: string
}

export function Card({ children, cardTitle }: CardProps) {
    return (
       <>
            <div 
                className="bg-card-grey text-text-grey text-sm rounded-[20px] py-8 px-5 my-8 flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold text-left mb-5">{cardTitle}</h3>
                {children}
            </div>
       </>
    )
}