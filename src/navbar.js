import Details from './details'
import creative from './images/creative.png'
import SideBar from './sidebar'
import Slider from './slider'
import { useState } from 'react'
const Navbar = ()=>{

  const [counter,setCounter] = useState(0);
  const textval = ["This is the best way to find your favourite stuff. Dont forget all these items are unique pieces crafted by you"," This is the best way to find your favorite stuff. Don't forget all these items are unique pieces hand-crafted by people"]
  const headval = ["Not Just Clothes","But a Lifestyle"]

  const changeCounter=(val)=>{
    setCounter(val)
  }

    return(

      // <div className='mainContainer'>
      <div className={counter ? "mainContainer":"mainContainer2"}>
      <div className="subContainer">
      
        <div className='header'>
            <SideBar></SideBar>
          <div className='logoContainer'>
            <div className='logoImage'>
            
              <img className="logoimg" alt="logo" src={creative}></img>
            </div>


          </div>
          <div className='navbar'>
    {/* add navbar component here */}

            <li className='navItems'>
                    <ul>Home</ul>
             
                    <ul>Catalog</ul>
                    <ul>Wishlist</ul>
                    <ul>Help</ul>
            </li>
          </div>



        </div>
        <Details pval={textval[counter]} hval={headval[counter]}></Details>
        <Slider currentval={counter} changeCounter={changeCounter} ></Slider>
        </div>
      </div>


    )
}

export default Navbar