import { useState } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"

const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue]=useState("")
  
  
  //de esta función estamos extrayendo lo que se escribe en el input
  //Pero solo guarda lo que se escribe en el momento
  const handleOnChange = (e) =>{
   // console.log(e.target.value)
    const inputText = e.target.value
    setInputValue(inputText)
  }



  const handleSubmit = (e) => { //función que va a almacenar cuando se de enter lo que se escribió en el input 
    event.preventDefault() 
    //console.log("si sirvo")
    setInputValue("")
    
    if(inputValue.length > 1){onNewCategory(inputValue)} //se hace este if, para que no agregue cosas vacias cuando aprietas enter
    
  }




    return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="add-category">Escribe una nueva categoria</label>
            <input id="add-category" type="text" placeholder="Buscar gifs" value={inputValue} onChange={handleOnChange}/>
        </form>
    </>
  )
}

export default AddCategory