import insta from "./images/insta.svg"
import "./style/insta.css"
import truck from "./images/truck.png"
import Photos from "./instaphotos"

const Insta = ()=>{

    return(
        <div className="instaContainer">
            <div  className="followus">
            <img src={insta} alt="insta logo"></img>
                <h2>Follow Us on Instagram</h2>
            </div>
            <Photos></Photos>
            
           <div className="features">
               <div className="f1">
                   <img alt="bag4" src={truck}></img>
                   <h3>2 Day Shipping</h3>
                    <p>Safest and most environmentally form of commercial transport</p>
               </div>

               <div className="f1">
                   <img  alt="bag3" src={truck}></img>
                   <h3>3 Years Guarantee</h3>
                    <p>Legal term more comprehensive and of higher import.</p>
               </div>

               <div className="f1">
                   <img alt="bag" src={truck}></img>
                   <h3>2 Day Shipping</h3>
                    <p>Safest and most environmentally form of commercial transport</p>
               </div>

               <div className="f1">
                   <img alt="bag2" src={truck}></img>
                   <h3>2 Day Shipping</h3>
                    <p>Safest and most environmentally form of commercial transport</p>
               </div>
           </div>
        </div>
    )
}
export default Insta