import { useState } from "react"
/*import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"*/
import {AddCategory, GifGrid} from "./components"

const GiftExpertApp = () => {
  //cuando nosotros queramos almacenar info, y esa info va a cambiar el hmtl, debemos usar useState
  const [categorias, setCategorias] = useState(["Batman"]) //siempre hay que darle un valor inicial, si no es indefinido y eso da errores
  //el useState es un espacio en memoria para en este caso almacenar mis categorias
  //console.log(categorias)  
  
    const onNewCategory= (itemCategoria)=>{ //esta es la función que saca el state de addCategory
        const newItem = itemCategoria;
        if(categorias.includes(newItem)) return //si en el array de categorias ya esta el new item, no hagas nada
        setCategorias([newItem, ...categorias])
    }
  

  return (
    <>
        {/*Titulo*/}
       <h1>GiftExpertApp</h1> 

       {/*input*/}
       <AddCategory 
        onNewCategory={onNewCategory}
       />
       
      
       
       {/*Listado*/}
       
        {categorias.map ( (categoria) => 
            (
            <GifGrid key={categoria}
            categoria={categoria}/> //estamos pasando mediante props, el item con el que estamos trabajando en el map, en este caso, categoria, que es lo que se escribe
           )
        )
        }
        
       
    </>
  )
}

export default GiftExpertApp