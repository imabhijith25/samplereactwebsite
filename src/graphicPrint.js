import "./style/graphicprint.css"
import shirt from "./images/shirt.jpg"
const GraphicPrint = ()=>{

    return(

      <div className="Graphiccontainer">
          <div className="stickyshirt">
<img src={shirt} className="Shirts"></img>
          </div>
          <div className="infoshirt">
              <mark>T-SHIRT</mark>
              <h2 className="graphich2">Graphic Print T-Shirt</h2>
                <div className="price">
                       <p><del>$400</del></p> 
                        <p><b>$290</b></p>
                        <p><mark className="splmark">Save $110</mark></p>

                </div>
                <p className="taxincl">Tax Included</p>
                <hr className="separation"></hr>
                <p>Size</p>
                <div className="someIcons">
                    <button className="sizebutton">M</button>
                </div>
                <div className="addOrBuy">
                    <button className="cartAdd new">ADD TO CART</button>
                    <button className="gridButton new">BUY IT NOW</button>
                </div>

                <div className="tags">
                    <p>Tags</p>
                    <p><mark className="m1">2021</mark></p>
                    <p><mark className="m1">PRINT</mark></p>

                </div>
                <div className="tags">
                    <p>Catalog</p>
                    <p><mark className="m1">T SHIRTS</mark></p>
                </div>

                <div className="fulldetails">
                        <p>Full Details -></p>
                </div>
          </div>

      </div>
    )
}
export default GraphicPrint