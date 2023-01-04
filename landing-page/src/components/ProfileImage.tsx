interface ProfileImageProps {
    borderColor?: string
}

export function ProfileImage({borderColor = ''}: ProfileImageProps) {
    const avatarUrl =  'https://avatars.githubusercontent.com/u/81828528?v=4'

    return <img 
        className={"border-" + borderColor + " border-2 w-32 h-32 rounded-full"}
        src={avatarUrl} 
        alt="a Picture of the Author of this page. White, Black short hair, on a blue background" />
}