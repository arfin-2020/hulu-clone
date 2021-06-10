import Thambnail from "./Thambnail"
import FlipMove from 'react-flip-move'
const Video = ({results}) => {
    return (
        <FlipMove className ='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {
                results.map(result=><Thambnail key={result.id} result={result}/>)
            }
        </FlipMove>
    )
}

export default Video
