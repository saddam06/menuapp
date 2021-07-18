import react from "react"
import "bootstrap/dist/css/bootstrap.min.css"




function MenuApp(props){
    return(
        <>
        
        <div className="col-md-4 mt-3">
            <img src={props.Image} alt="" key={props.id}/>

        </div>
        </>
    )

}
export default MenuApp;