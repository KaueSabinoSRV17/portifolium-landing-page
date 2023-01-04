import { StackItem } from "./StackItem"

export function StackItemList() {

    const stackNames = [
        'Java',
        'Spring',
        'Javascript',
        'React',
        'Cypress',
        'Docker'
    ]

    return (
        <ul className="grid grid-cols-3 gap-[15px]">
            {stackNames.map(name => <li className="bg-stacks-pink rounded-[30px] text-xs text-black text-center font-bold py-[6px] px-[7px]">{name.toUpperCase()}</li>)}
        </ul>
    )
}