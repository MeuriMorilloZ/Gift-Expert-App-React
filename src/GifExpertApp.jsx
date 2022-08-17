import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { SliderCount } from "./components/SliderCount";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['cats', 'flower']);
  const [limit, setLimit] = useState(10);

  const onAddCategory = (NewCategory) => {

    if(categories.includes(NewCategory)) return;
    // console.log(NewCategory);
    // categories.push(NewCategory);
    setCategories([NewCategory, ...categories]);
    
  }

  const onDeleteCategory = (nomCategory) => {
    setCategories (
      categories.filter(categoria => categoria !== nomCategory) //!== para comparar tambien el tipo de dato 
    )
  }

  const  onDeleteAll = () => {
    setCategories ([])
  }

  return (
    <main className="appid">
      {/* titulo */}
      <div className="title-container">
        <h1>GifExpertApp</h1>
        <button onClick={onDeleteAll} className = "btnall">Borrar Categorias</button>
      </div>

      
      {/* Input */}
      <AddCategory 
        onNewCategory={value => onAddCategory(value)}
      /> 


      <SliderCount
        setLimit = {setLimit}
        limit = {limit}
      />
      


      {/* Listado de Gif */}
      {
        categories.map(category => (
              <GifGrid
                key = {category} 
                category = {category}
                limit = {limit}
                onDeleteCategory = {onDeleteCategory}
              />
            )
        )
      }


    </main>
  )
}
