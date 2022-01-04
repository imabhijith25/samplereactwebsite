import b1 from "./images/b1.jpg"
import b2 from "./images/b2.jpg"
import b3 from "./images/b3.jpg"
import right from "./images/arrow-right.svg"
import "./style/inspiration.css"
const Inspiration = ()=>{


    return(
        <div className="inspContainer">

        <div className="gridWrapperF inspirationHeader">
             <h3 className="collectionHeadingF inspirationH">Inspirations</h3>
        </div>
        <div className="showcase blog">
            <div className="I1blog inspiration">
                <img alt="bagImage" src={b1} className="bagFtImg blog imgI"></img>
              
                <p className="type blog insp">MFW Today</p>
                <p className="cost insptext">Couture shows have been held in Paris since at least 1945, when the Chambre Syndicale de la Haute Couture...</p>

            </div>
            <div className="I1blog inspiration">
          
            <img alt="bagImage" src={b2} className="bagFtImg blog imgI"></img>

                <p className="type blog">Paris Fashion Week</p>
                <p className="cost insptext">But the more organized “semaine de la mode” that we know today was put together by the French Fashion Federation Fédération Française...</p>
   
            </div>
            <div className="I1blog inspiration">
            <img  alt="bagImage" src={b3} className="bagFtImg blog imgI" ></img>
          
                <p className="type blog">Fashion Shows</p>
                <p className="cost insptext">Artist Unskilled Worker—Helen Downie—discusses her work in her London studio and shows the places that inspire her. Today the main...</p>
 

            </div>

        </div>



        </div>
    )

}

export default Inspiration