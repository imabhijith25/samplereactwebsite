import "./style/test.css"
import fashionimage from "./images/fashionimage.jpg"
const Test = () =>{

    return (
        <div className="trending">
            <div className="wrappertrending">
                <div>
                    <img src={fashionimage} className="fashionImage"></img>
                </div>
                <div className="trendingInfo">
                    <p><mark>TRENDING</mark></p>
                    <h3>Pink is the new Black</h3>
                    <p className="trendingPara">Unlike the other fashion capitals, there are actually two “fashion weeks” in Paris. If you don’t count the menswear shows. The “haute couture” high fashion shows and the “prêt-à-porter” ready to wear) shows.</p>
                    <button className="gridButton light">SEE MORE</button>
                </div>
            </div>



        </div>
    )
}
export default Test