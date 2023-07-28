import ImageShow from "./ImageShow";

export default function ImageList({images}){
    const renderedImage = images.map((image)=>{
       return <ImageShow key = {image.id} image = {image}/>
    });

    return (
        <div>
            {renderedImage}
        </div>
    )
}
