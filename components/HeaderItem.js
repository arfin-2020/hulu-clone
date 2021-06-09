function HeaderItem({title,Icon}) {
    return (
        <div className = 'flex flex-col items-center w-12 sm:w-20 hover:text-white cursor-pointer group'>
        <Icon className="h-8 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 text-transform: uppercase traking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
