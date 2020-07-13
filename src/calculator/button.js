import React from 'react';
import './calculator.css'

function Buttons(props){


    return(
        <button onClick ={() => props.onClick()}  
            className= 'buttons '>
            {props.value}
        </button>
    )
}

export default Buttons;