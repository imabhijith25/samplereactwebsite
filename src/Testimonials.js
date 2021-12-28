import "./style/testimonials.css"
import p1 from "./images/p1.png"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"

const Testimonials = ()=>{

    return(

        <div className="testimonialComponent">
            
            <div className="headingT">
                <h2 className="h2F">Testimonials</h2>
                <p className="pf test">Here’s what our customer have to say</p>
            </div>

            <div className="Reviews">
                <div className="r1">


                    <img className="profilePic" src={p1}></img>
                    <p >If you have the opportunity to play this game of life you need to appreciate every moment."</p>
                    <p><b>Leila Kanye</b></p>
                </div>

                <div className="r1">
                    <img className="profilePic" src={p2}></img>
                    <p>If you have the opportunity to play this game of life you need to appreciate every moment."</p>
                    <p><b>Emily Jane</b></p>
                </div>

                <div className="r1">
                    <img className="profilePic" src={p3}></img>
                    <p>"The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color."</p>
                    <p><b>Mike Jackson</b></p>
                </div>

            </div>
        </div>
    )
}

export default Testimonials;