
import { useFetchGifs } from "../hooks/useFetchGifs"
import GifItem from "./GifItem"

const GifGrid = ({categoria}) => {

const {images, isLoading} = useFetchGifs(categoria)
   

    return (
    <>
    <h3>{categoria}</h3>

    {
      isLoading && (<h2>Cargando...</h2>) // si esta en true, lo muestra y en false, no lo va a mostrar
    }
  
      <div className="card-grid">
        {images.map((gif)=>
        (
          
               <GifItem
               key={gif.id}
                {...gif}
          />
          
       
        )
        )
        }
      </div> 
    </>
  )
}

export default GifGrid