import "./style/footer.css"
const Footer = ()=>{
    return(
        <div className="footerMain">
            <div className="followonSoc">
                <div className="leftend">
                <h3>Follow us on social media</h3>
                </div>
                <div className="rightend">
                    
                        <p><ion-icon name="logo-twitter"></ion-icon></p>
                        <p className="logoFacebook"><ion-icon name="logo-facebook" ></ion-icon> </p>
                </div>

            </div>
            <div>
                <hr className="hrline foot"></hr>
            </div>

            <div className="links">
                <div className="leftlinks">
                    <ul className="linklist"><p><b>Links</b></p>
                        <li>Home</li>
                        <li>Catalog</li>
                        <li>WhishList</li>
                        <li>Help</li>
                        <li>Buy Now</li>
                    </ul>
                </div>

                <div className="rightstuff">

                    <div className="footersubscribe">
                    <h5 className="footerstuff">Subscribe to our mailing list</h5>
                    <input type="text" className="emailfooter" placeholder="Your Email"></input>
                    <button className="gridButton">SUBSCRIBE</button>
                    </div>
                </div>

            </div>
            <hr className="hrline foot copy"></hr>
            <div className="followonSoc copy">
                <div className="leftend">
                <p>© 2022, Creative Tim. Powered by Shopify</p>
                </div>


            </div>
        </div>
    )
}

export default Footer