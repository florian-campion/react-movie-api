import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ContentList = () => {
    const url = useParams();
    useEffect(
        () => {
            console.log(url);
        }, []
    )
    return (
        <div>
            <p>{url.num}</p>
            Hello world
        </div>
    )
}
export default ContentList;