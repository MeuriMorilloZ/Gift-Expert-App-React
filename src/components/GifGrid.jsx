import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category, limit, onDeleteCategory}) => {

    const {images, isLoading} = useFetchGifs (category, limit);
    
    return (
        <>
            <div className="title-container">
                <h3>{category}</h3>
                <button onClick={() => {onDeleteCategory(category)}} className = "btndelete">X</button>
            </div>

            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            
            <div className="card-grid">
                {
                    images.map ( ( image ) => (
                        <GifItem 
                            key = {image.id}
                            {...image}
                        />
                    ))
                }
                
            </div>

        </>
    )
}
