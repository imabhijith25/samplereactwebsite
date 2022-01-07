
import bagImage from "./images/bagImage.jpg"
import Trousers from "./images/trousers.jpg"
import ts from "./images/ts.jpg"
import suits from "./images/suits.png"
import acc from "./images/acc.jpg"
import "./style/gridmob.css"
const GridView = ()=>{

return(


    <div className="gridView">
        <div className="gridWrapper">
        <h3 className="collectionHeading">Collection List</h3>
        <div className="underline">
            <hr className="hrline"></hr>

        </div>
        </div>
        
        <div className="mobgridcontainer">
            <div className="topone">
                <h3>Bucket Bags</h3>
                <p>3 Products</p>
                <button>SHOP NOW</button>
                
            </div>


            {/* bottom two */}

            <div className="bottomTwo">
                <div className="bottomTwo singular three">
                <h3>T Shirts</h3>
                <p>3 Products</p>
                <button>SHOP NOW</button>

                </div>
                <div className="bottomTwo singular four">
                <h3>Suits</h3>
                <p>3 Products</p>
                <button>SHOP NOW</button>

                </div>

            </div>
  {/* main bottom two */}

            <div className="bottomTwo">
                <div className="bottomTwo singular one">
                <h3>Trousers</h3>
                <p>3 Products</p>
                <button>SHOP NOW</button>

                </div>
                <div className="bottomTwo singular two">
                <h3> Bags</h3>
                <p>3 Products</p>
                <button>SHOP NOW</button>

                </div>

            </div>





        </div>

        <div className="gridContainer"  >
            <div className="topTwo" >
                <div className="gridItem-1">
                <img src={bagImage} alt="gridbags" className="bagImage"></img>
               <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">Bucket Bags</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton nonanimate">Shop Now</button>
                </div>
             
                   
                </div>
                <div className="gridItem-1">
                <img src={Trousers} alt="gridbags" className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">Trousers</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton nonanimate">Shop Now</button>
                </div>
             
                </div>
            </div>
        <div className="bottomThree">
            <div className="gridItem-3">
            <img src={ts}  alt="gridbags" className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">T Shirts</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton nonanimate">Shop Now</button>
                </div>
            </div>
            <div className="gridItem-3">
            <img src={suits} alt="gridbags" className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">Trousers</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton nonanimate">Shop Now</button>
                </div>


            </div>
            <div className="gridItem-3">

            <img src={acc} alt="gridbags" className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">Trousers</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton">Shop Now</button>
                </div>
            </div>
        </div>


        </div>

      
      
    </div>
)

}

export default  GridView;