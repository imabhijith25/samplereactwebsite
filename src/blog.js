import "./style/blogs.css"
import b1 from "./images/b1.jpg"
import b2 from "./images/b2.jpg"
import b3 from "./images/b3.jpg"
import right from "./images/arrow-right.svg"
const Blog=()=>{


    return(

        <div className="BlogContainer">
        <div className="gridWrapperF">
             <h3 className="collectionHeadingF">Blog Articles</h3>
             <div className="underline">
            <hr className="hrline"></hr>

        </div>
        </div>
        <div className="showcase blog">
            <div className="I1blog">
                <img src={b1} className="bagFtImg blog"></img>
              
                <p className="type blog">MFW Today</p>
                <p className="cost blog">Couture shows have been held in Paris since at least 1945, when the Chambre Syndicale de la Haute<br/> Couture...</p>
            <div className="continue">
                <p>Continue reading</p>
                <img src={right}></img>
            </div>
        <div className="about">
            <p>Creative Time</p>
            <p>October 20,2021</p>
        </div>
            </div>
            <div className="I1blog">
          
            <img src={b2} className="bagFtImg blog"></img>

                <p className="type blog">Paris Fashion Week</p>
                <p className="cost blog">But the more organized “semaine de la mode” that we know today was put together by the French Fashion Federation Fédération Française...</p>
                <div className="continue">
                <p>Continue reading</p>
                <img src={right}></img>
            </div>
        <div className="about">
            <p>Creative Time</p>
            <p>October 20,2021</p>
        </div>

            </div>
            <div className="I1blog">
            <img src={b3} className="bagFtImg blog" ></img>
          
                <p className="type blog">Fashion Shows</p>
                <p className="cost blog">Artist Unskilled Worker—Helen Downie—discusses her work in her London studio and shows the places that inspire her. Today the main...</p>
                <div className="continue">
                <p>Continue reading</p>
                <img src={right}></img>
            </div>
        <div className="about">
            <p>Creative Time</p>
            <p>October 20,2021</p>
        </div>


            </div>

        </div>
        <div className="blogbuton">
        <button className="gridButton ">More</button>
        </div>
        
        </div>
    )

}
export default Blog