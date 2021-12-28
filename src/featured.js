import "./style/featured.css"
import bag1 from "./images/bag1.jpg"
import bag2 from "./images/bag2.jpg"
import bag3 from "./images/bag3.jpg"
import heart from "./images/heart.svg"
const Featured=()=>{

    return(
        <div className="featuredContainer">
        <div className="gridWrapperF">
             <h3 className="collectionHeadingF">Featured Collection</h3>
             <div className="underline">
            <hr className="hrline"></hr>

        </div>
        </div>

        <div className="showcase">
            <div className="I1">
                <div className="love">
                    <img src={heart}></img>
                </div>
                <img src={bag1} className="bagFtImg"></img>
                <button className="cartAdd">ADD TO CART</button>
                <p className="type">Sunset Chain Bag</p>
                <p className="cost">$1,000</p>
           

            </div>
            <div className="I1">
            <div className="love">
                    <img src={heart}></img>
                </div>
            <img src={bag2} className="bagFtImg"></img>
                <button className="cartAdd">ADD TO CART</button>
                <p className="type">Sunset Chain Bag</p>
                <p className="cost">$1,000</p>
           

            </div>
            <div className="I1">
            <div className="love ft">
                <p><mark  className="save">SAVE $1,400</mark></p>
                    <img src={heart}></img>
                </div>
            <img src={bag3} className="bagFtImg"></img>
            <button className="cartAdd">ADD TO CART</button>
                <p className="type">Sunset Chain Bag</p>
                <p className="cost">$1,000</p>
           


            </div>

        </div>


        </div>
    )
}


export default Featured