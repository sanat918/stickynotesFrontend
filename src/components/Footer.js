import React from 'react'
import PropTypes from 'prop-types'

let date=new Date()
let year=date.getFullYear()


export default function footer(props) 
{
    return(
        
        <div className=" footer" style={{backgroundColor: "lightblue" }}>
         <p>  © {year} Copyright : {props.name}</p>
        </div>
      
       
    )
}

footer.prototype={name: PropTypes.string.isrequired}
footer.defaultProps = {
    name: 'Enter name of developer'
};
