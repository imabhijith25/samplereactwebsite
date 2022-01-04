import "./style/newexpander.css"
import { useState } from "react"
import expand from "./images/caret-bottom.svg"
import collapse from "./images/caret-top.svg"
import "./style/expander.css"
const NewExpand = ()=>{
    const [toggleval, setToggle] = useState({isopen1:false , isopen2:false,isopen3:false})

    const changeVal = (id)=>{
        if(id===1){
  
                toggleval.isopen1 = !toggleval.isopen1;
                setToggle({...toggleval})

        }
        else if(id===2){
  
            toggleval.isopen2 = !toggleval.isopen2;
            setToggle({...toggleval})

        }
        else if(id===3){
  
            toggleval.isopen3 = !toggleval.isopen3;
            setToggle({...toggleval})

        }

    




    }
    return(
        <div >
            <div className="expanderContainer">
            <div  className="followus">
    
    <h2 className='faq'>Frequently Asked Question</h2>
    <p>Our customer service will is here to help you.</p>
</div>
                <div className="expanderbutton">
                <p><b>  How Do I Order   </b></p>
                    <button className="expandcollapse" onClick={()=>{changeVal(1)}}><img alt="Expand-Collpase "src={toggleval.isopen1 ? collapse : expand}></img></button>

                    </div>

                    
                <div className={toggleval.isopen1 ? "hcontent1 vcshow" : "hcontent1 vc"}>
                We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
                </div >

                <hr className="expandSeparator"></hr>





                <div className="h1Expand">
                <div className="expanderbutton">
                <p><b>  How Can I make the payment   </b></p>
                    <button className="expandcollapse" onClick={()=>{changeVal(2)}}><img alt="Expand-Collpase " src={toggleval.isopen2 ? collapse : expand}></img></button>

                    </div>
                <div className={toggleval.isopen2 ? "hcontent2 vcshow" : "hcontent2 vc"}>
                It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.
                </div >

                <hr className="expandSeparator"></hr>

            </div>
            <div className="h1Expand">
                <div className="expanderbutton">
                <p><b>  How much time does it take to receive the order  </b></p>
                    <button  className="expandcollapse" onClick={()=>{changeVal(3)}}><img  alt="Expand-Collpase " src={toggleval.isopen3 ? collapse : expand}></img></button>

                    </div>
                <div className={toggleval.isopen3 ? "hcontent3 vcshow" : "hcontent3 vc"}>
                The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
                </div>
                <hr className="expandSeparator"></hr>
            </div>

            </div>

         
    
        </div>



    )
}

export default NewExpand