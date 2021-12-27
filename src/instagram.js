import insta from "./images/insta.svg"
import "./style/insta.css"
import truck from "./images/truck.png"
const Insta = ()=>{

    return(
        <div className="instaContainer">
            <div  className="followus">
            <img src={insta}></img>
                <h2>Follow Us on Instagram</h2>
            </div>
           <div className="features">
               <div className="f1">
                   <img src={truck}></img>
                   <h3>2 Day Shipping</h3>
                    <p>Safest and most environmentally form of commercial transport</p>
               </div>

               <div className="f1">
                   <img src={truck}></img>
                   <h3>3 Years Guarantee</h3>
                    <p>Legal term more comprehensive and of higher import.</p>
               </div>

               <div className="f1">
                   <img src={truck}></img>
                   <h3>2 Day Shipping</h3>
                    <p>Safest and most environmentally form of commercial transport</p>
               </div>

               <div className="f1">
                   <img src={truck}></img>
                   <h3>2 Day Shipping</h3>
                    <p>Safest and most environmentally form of commercial transport</p>
               </div>
           </div>
        </div>
    )
}
export default Insta