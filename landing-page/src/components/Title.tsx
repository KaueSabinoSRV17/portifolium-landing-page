import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
    return <h1 className="p-[30px] bg-card-grey mr-10 mt-10 rounded-[20px] font-bold text-text-grey text-xl">{children}</h1>
}