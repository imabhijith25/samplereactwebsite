import "./style/footer.css"
const Footer = ()=>{
    return(
        <div className="footerMain">
            <div className="followonSoc">
                <div className="leftend">
                <h3>Follow us on social media</h3>
                </div>
                <div className="rightend">
                        <p>Instagram </p>
                        <p>Facebook </p>
                </div>

            </div>
            <div className="links">
                <div className="leftlinks">
                    <ul className="linklist"><p><b>Links</b></p>
                        <li>Home</li>
                        <li>Catalog</li>
                        <li>WhishList</li>
                        <li>Help</li>
                    </ul>
                </div>

                <div className="rightstuff">

                    <div className="footersubscribe">
                    <h5 className="footerstuff">Subscribe to our mailing list</h5>
                    <input type="text" className="emailfooter"></input>
                    <button className="gridButton">Subscribe</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Footer