export interface ExperienceItemProps {
    title: string | undefined,
    startDate: Date,
    finishDate?: Date | string,
    description: string
}

export function ExperienceItem({title, startDate, finishDate, description}: ExperienceItemProps) {

    const formatedFinishDate = finishDate instanceof Date ? finishDate.getFullYear() : 'Atualmente'

    return (
        <>
            <dt className="font-bold">. {title}</dt>
            <dd>{startDate.getFullYear() + ' - ' + formatedFinishDate}</dd>
            <dd className="mb-4">{description}</dd>
        </>
    )
}