import React from 'react'

const Zones = (props) => {
    return (
        <>
          <div className="zones">
              <div className="image"><img className="belowimages" src={props.image} alt="" /></div>
              <div className="datas">
                  <div className="values">{props.value}</div>
                  <div className="descp">{props.descp}</div>
              </div>    
          </div>  
        </>
    )
}

export default Zones
