import {useState} from 'react'
import ExDetails from './expanderDetails'
import "./style/expander.css"

const Expander = ()=>{

    const [toggleone, setToggleone] = useState('expand')
    const [toggletwo, setToggletwo] = useState('expand')
    const [showone,setShowone] = useState(false)
    const [showtwo,setShowtwo] = useState(false)

    const textdetails=["We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.","It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too."]
    const [content, setcontent] = useState(null)
    const toggleset = (e,option)=>{


        if(option===1){
            if(toggleone==="expand"){
                setToggleone("collapse")
                setShowone(true)
                setcontent(textdetails[option-1])
                console.log(showone)
            }
            else if(toggleone==="collapse"){
                setToggleone("expand")
                setShowone(false)
                console.log(showone)
                

            }

        }
        else{
            if(toggletwo === "expand"){
                setToggletwo("collapse")
                setShowtwo(true)
                setcontent(textdetails[option-1])
            }
            else if(toggletwo=="collapse"){
                setToggletwo("expand")
                setShowtwo(false)
            }
        }
        
    }

    return(
        <div className='expanderContainer'>
                  <div  className="followus">
    
                <h2>Frequently Asked Question</h2>
            </div>
            <div>
               <div className='expanderbutton'>
               <p><b>  How Do I Order   </b></p>
                <button onClick={(e)=>{toggleset(e,1)}}>{toggleone}</button>
              

               </div>
               {showone && <ExDetails item={textdetails[0]}></ExDetails>}

            </div>

            <div>
               <div className='expanderbutton'>
               <p><b>  How Can I make the Payment   </b></p>
                <button onClick={(e)=>{toggleset(e,2)}}>{toggletwo}</button>
              

               </div>
               {showtwo && <ExDetails item={textdetails[1]}></ExDetails>}

            </div>
        </div>
    )

}

export default Expander


