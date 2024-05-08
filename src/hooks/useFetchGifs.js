import { useEffect, useState } from "react"
import { getGifs } from "../helpers/peticion"


export const useFetchGifs = (categoria) => { //categoria es lo que se esta guardando cuando se escribe en el input, es lo que se guarda en el state de categorias
    
    const [images, setImages]= useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    const getImages = async () =>{
        const newImages = await getGifs(categoria) // categoria es lo que se va a almacenar en nuestro path
        setImages(newImages)
        setIsLoading(false)
       
        
    }


    useEffect( ()=>{
      getImages()
   
    }, [])
  
  
    return {
        images,
        isLoading,
       
        
  }
    
  
}
