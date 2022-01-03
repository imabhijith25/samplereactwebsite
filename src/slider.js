import right from "./images/media-play.svg"
import left from "./images/caret-left.svg"
import "./style/slider.css"
const Slider = (props)=>{
    const increment = () =>{
        const newval = ((props.currentval + 1) % 2);
        
        props.changeCounter(newval)
        console.log(newval)
      
    }

    const decrement = ()=>{
   
        const newval = Math.abs((props.currentval - 1) % 2);
        props.changeCounter(newval)
        console.log(newval)
    }

    return(
        <div className="mover">
            <button onClick={decrement} className="increment"> <img src={left}></img> </button>
            <div className="moverbutton">
                <button className={!props.currentval?"focused":"unfocused"} onClick={()=>{props.changeCounter(0)}}>.</button>
                <button className={props.currentval?"focused":"unfocused"} onClick={()=>{props.changeCounter(1)}} >.</button>
            </div>
            <button onClick={increment} className="increment"><img src={right} ></img></button>
         
        </div>
    )


}
export default Slider