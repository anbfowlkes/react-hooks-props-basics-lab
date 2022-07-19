import React from 'react'

const Links = (props) => {
    return (
      <div>  
        <h3>Links</h3>
        <a href={props.linkedin}>{props.linkedin}</a>
        <a href={props.git}>{props.git}</a>
      </div>
    )
}

export default Links