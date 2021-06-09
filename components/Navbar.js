import request from "../utlity/request"
import {useRouter} from 'next/router'
const Navbar = () => {
    const router = useRouter();
    return (
        <navbar className="relative">
            <div className = 'flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20  overflow-x-scroll scrollbar-hide'>
            {
                Object.entries(request).map(([key,{title,url}])=>(
                    <h2 
                    onClick={()=>router.push(`/?name=${key}`)}
                    className="last:pr-24 
                    cursor-pointer transition 
                    duration-100 transform 
                    hover:scale-125
                    hover:text-white 
                    active:text-red-500" 
                    key={key}>{title}</h2>
                ))
            }
            </div>
            <div className = 'absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'/>
        </navbar>
    )
}

export default Navbar
