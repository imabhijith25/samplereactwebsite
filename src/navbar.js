import creative from './images/creative.png'
import SideBar from './sidebar'
const Navbar = ()=>{

    return(
      
        <div className='header'>
            <SideBar></SideBar>
          <div className='logoContainer'>
            <div className='logoImage'>
            
              <img className="logoimg" src={creative}></img>
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

    )
}

export default Navbar