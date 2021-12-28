
import bagImage from "./images/bagImage.jpg"
import Trousers from "./images/trousers.jpg"
import ts from "./images/ts.jpg"
import suits from "./images/suits.png"
import acc from "./images/acc.jpg"
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
            <div className="top1">
            <div className="gridItem-1">
                <img src={bagImage} className="bagImage"></img>
               <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">Bucket Bags</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton">Shop Now</button>
                </div>
             
                   
                </div>
                
            </div>
            <div className="bottom4">
            <div className="gridItem-3">
            <img src={ts} className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">T Shirts</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton">Shop Now</button>
                </div>
            </div>
            <div className="gridItem-3">
            <img src={ts} className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">T Shirts</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton">Shop Now</button>
                </div>
            </div>
   

            </div>







        </div>

        <div className="gridContainer"  >
            <div className="topTwo" >
                <div className="gridItem-1">
                <img src={bagImage} className="bagImage"></img>
               <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">Bucket Bags</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton">Shop Now</button>
                </div>
             
                   
                </div>
                <div className="gridItem-1">
                <img src={Trousers} className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">Trousers</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton">Shop Now</button>
                </div>
             
                </div>
            </div>
        <div className="bottomThree">
            <div className="gridItem-3">
            <img src={ts} className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">T Shirts</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton">Shop Now</button>
                </div>
            </div>
            <div className="gridItem-3">
            <img src={suits} className="bagImage"></img>
                <div className="gridItem1-Container"> 
                         <h3 className="gridHeading">Trousers</h3>
                        <p className="gridP">3 Products</p>
                        <button className="gridButton">Shop Now</button>
                </div>


            </div>
            <div className="gridItem-3">

            <img src={acc} className="bagImage"></img>
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