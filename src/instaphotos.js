import "./style/photos.css"
// import bag from "./images/bag1.jpg"
const Photos = ()=>{
    const bag="https://cdn.shopify.com/s/files/1/0604/0797/2065/files/look-5_300x300.jpg?v=1634665055%27"
    const bag2= "https://cdn.shopify.com/s/files/1/0604/0797/2065/files/look-4_300x300.jpg?v=1634665054'"
    const bag3="https:////cdn.shopify.com/s/files/1/0604/0797/2065/files/look-6_300x300.jpg?v=1634665054"
    return(


        //pc version
        <div className="godContainer">
            <div className="imageDisplay">
                
            <div className="imagecontainer">
                <img src={bag} className="instaphoto"></img>
                <div className="overlay">   

                </div>

            </div>
            <div className="imagecontainer">
                <img src={bag2} className="instaphoto"></img>
                <div className="overlay">   

                </div>

            </div>
            <div className="imagecontainer">
                <img src={bag3} className="instaphoto"></img>
                <div className="overlay">   

                </div>

            </div>
            <div className="imagecontainer">
                <img src={bag} className="instaphoto"></img>
                <div className="overlay">   

                </div>

            </div>
  


            </div>


            {/* Mobile */}

            <div className="imageDisplaymobile">

                            <div className="imagecontainerphone">
                                    <img src={bag} className="instaphoto"></img>
                                    <div className="overlay">   

                                    </div>
                                </div>
                                <div className="imagecontainerphone">
                                        <img src={bag2} className="instaphoto"></img>
                                        <div className="overlay">   

                                </div>
                                </div>


            </div>
            <div className="imageDisplaymobile">

            <div className="imagecontainerphone">
                    <img src={bag3} className="instaphoto"></img>
                    <div className="overlay">   

                    </div>
                </div>
                <div className="imagecontainerphone">
                        <img src={bag} className="instaphoto"></img>
                        <div className="overlay">   

                </div>
                </div>


            </div>
  
 
        
</div>



    )

}
export default Photos