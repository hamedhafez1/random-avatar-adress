export const getRandomAvatarSrc = () => {
    const randomAvatar = [
        'https://i.pravatar.cc/400?img=5',
        'https://i.pravatar.cc/400?img=9',
        'https://i.pravatar.cc/400?img=12',
        'https://i.pravatar.cc/400?img=13',
        'https://i.pravatar.cc/400?img=14',
        'https://i.pravatar.cc/400?img=23',
        'https://i.pravatar.cc/400?img=38',
        'https://i.pravatar.cc/400?img=52',
        'https://i.pravatar.cc/400?img=54',
        'https://i.pravatar.cc/400?img=56',
        'https://i.pravatar.cc/400?img=59',
    ]
    return randomAvatar[Math.floor(Math.random() * randomAvatar.length)]
}
