import "./style/featured.css"
import bag1 from "./images/bag1.jpg"
import bag2 from "./images/bag2.jpg"
import bag3 from "./images/bag3.jpg"
const Featured=()=>{

    return(
        <div className="featuredContainer">
        <div className="gridWrapperF">
             <h3 className="collectionHeadingF">Featured Collection</h3>
        </div>

        <div className="showcase">
            <div className="I1">
                <img src={bag1} className="bagFtImg"></img>
                <button className="cartAdd"> Add To Cart</button>
                <p className="type">Sunset Chain Bag</p>
                <p className="cost">$1,000</p>
           

            </div>
            <div className="I1">
          
            <img src={bag2} className="bagFtImg"></img>
                <button className="cartAdd"> Add To Cart</button>
                <p className="type">Sunset Chain Bag</p>
                <p className="cost">$1,000</p>
           

            </div>
            <div className="I1">
            <img src={bag3} className="bagFtImg"></img>
            <button className="cartAdd"> Add To Cart</button>
                <p className="type">Sunset Chain Bag</p>
                <p className="cost">$1,000</p>
           


            </div>

        </div>


        </div>
    )
}


export default Featured