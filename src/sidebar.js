import { useState } from "react"
const SideBar = ()=>{

const [open, setopen] = useState(false)
const [classn, setclassn] = useState("sidebar")

const openBar=(e)=>{

    if(open===false){
        setopen(true)
        setclassn("sidebaropen")
    }

}

const closebar = (e)=>{
    setopen(false)
    setclassn("sidebar")
}
return(
<div className="sideBarContainer">
    <button className="open" onClick={(e)=>{openBar(e)}}>☰</button>
<div className={classn}>
        <button className="closebtn" onClick={(e)=>{closebar(e)}}>x</button>
    <a href='#'>Home</a>
    <a href='#'>Catalog</a>
    <a href='#'>WishList</a>

  </div>

</div>

)
}
export default SideBar