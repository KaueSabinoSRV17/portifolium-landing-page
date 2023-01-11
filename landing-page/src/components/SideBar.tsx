import { PropsWithChildren } from "react";
import { Card } from "./Card";
import { ProfileImage } from "./ProfileImage";

interface SideBarProps extends PropsWithChildren {
}

export function SideBar({children}: SideBarProps) {
    return (
        <aside className="ml-10 p-1">
            {children}
        </aside>
    )
}