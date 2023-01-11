import { PropsWithChildren } from "react"
import { ExperienceItem, ExperienceItemProps } from "./ExperienceItem"

interface ExperienceListProps {
    experiences: Array<ExperienceItemProps>
}

export function ExperienceList({ experiences }: ExperienceListProps) {
    return (
        <dl className="ml-9">
            {experiences.map(experience => {
                const {title, startDate, finishDate, description} = experience

                return <ExperienceItem 
                    title={title}
                    startDate={startDate}
                    finishDate={finishDate || 'Atualmente'}
                    description={description} />
            })}
        </dl>
    )
}