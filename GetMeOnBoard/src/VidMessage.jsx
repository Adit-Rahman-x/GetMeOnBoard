import React from 'react'

const fillertext = "This is filler text"
const VidMessage = ({text = fillertext}) => {
  return (
    <div
    style={container_style}>
        <center>
            <h1> {text}</h1>
            
            <p> {text}</p>
        </center>
    </div>
  )
}

const container_style = {
        width : "30%",
        height : "30%",
        float : "right",
        marginTop: "5%",
        backgroundColor : "gray",
        border : '5px solid lightblue',
        borderRadius : 30 ,
        opacity : 0.75,
        
        
        
}

export default VidMessage