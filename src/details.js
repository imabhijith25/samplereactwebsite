

const Details=(props)=>{
  


    return(

      
        <div className="details-container">
          <div className="details-info"> 
          <h2 className="headingClass">{props.hval}</h2>
            <p className="pclass">  {props.pval}</p>
            <button className="buyButton">BUY NOW</button>
          </div>
        </div>
    )
}
export default Details