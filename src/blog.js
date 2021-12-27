import "./style/blogs.css"
import b1 from "./images/b1.jpg"
import b2 from "./images/b2.jpg"
import b3 from "./images/b3.jpg"
const Blog=()=>{


    return(

        <div className="BlogContainer">
        <div className="gridWrapperF">
             <h3 className="collectionHeadingF">Featured Collection</h3>
        </div>
        <div className="showcase">
            <div className="I1blog">
                <img src={b1} className="bagFtImg"></img>
              
                <p className="type">MFW Today</p>
                <p className="cost">Couture shows have been held in Paris since at least 1945, when the Chambre Syndicale de la Haute Couture...</p>
           

            </div>
            <div className="I1blog">
          
            <img src={b2} className="bagFtImg"></img>

                <p className="type">Paris Fashion Week</p>
                <p className="cost">But the more organized “semaine de la mode” that we know today was put together by the French Fashion Federation Fédération Française...</p>
           

            </div>
            <div className="I1blog">
            <img src={b3} className="bagFtImg"></img>
          
                <p className="type">Fashion Shows</p>
                <p className="cost">Artist Unskilled Worker—Helen Downie—discusses her work in her London studio and shows the places that inspire her. Today the main...</p>
           


            </div>

        </div>
        <div className="blogbuton">
        <button className="gridButton ">More</button>
        </div>
        
        </div>
    )

}
export default Blog