import react, { useState } from "react"

import Data from "./component/Data"
import MenuApp from "./component/MenuApp"
import "bootstrap/dist/css/bootstrap.min.css"

function App(){
  const[ items,setItems]=useState(Data)

  const myfunction=(cdata)=>{
    if(cdata==="all"){
      setItems(Data)
      return
    }
    setItems(
      Data.filter((ditems)=>{
        return ditems.catogary===cdata
      })
     
    
      
    )
    
  }

  return(
   <>
   <div className="container main">
     


   <h1>gallery</h1>
   <div className="btn-container">
     <button onClick={ ()=>{
       myfunction("all")
     }} >All</button>
     <button onClick={ ()=>{
       myfunction("fruits")
     }} >Fruits</button>
    
     <button onClick={ ()=>{
       myfunction("music")
     }} >Music</button>
    
     <button onClick={ ()=>{
       myfunction("nature")
     }} >Nature</button>
    
   </div>
   </div>


   <div className="container">
     <div className="row">
       {items.map((values,index)=>{
         return (
           <MenuApp 
           id={index}
           {...values}/>
        
          )
       })}
     </div>
   </div>
  

   </>
  )
}
export default App;


