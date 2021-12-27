import "./style/maps.css"
const MapView = () =>{
    return (
        <div className="mapMain">

            <div className="mapcontainer">
                    <div className="mapInfo">
                        <b><p className="p5map">WE ARE HERE</p></b>
                        <h5 className="h5map">Are you looking for our store?</h5>
                       <b> <p className="p5map">Address</p></b>
                        <p className="p5map">123 Fake St. Toronto, Canada</p>
                        <b> <p className="p5map"> Open</p></b>
                        <p className="p5map">Mon - Fri, 10am - 9pm</p>
                        <button className="gridButton directions">Get Directions</button>
                    
                    </div>
            </div>        
    
    
    </div>
    )
}
export default MapView