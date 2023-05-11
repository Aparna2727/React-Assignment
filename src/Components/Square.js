import React from 'react';
import "./Square.css";


export function Square({id, className,state }) {
    return(
        // {`Component-className ${props-Name}`} ==> it is advance JavaScript Property for passing className property as a props
        // `square-container ${className}` === "square-container border-right-bottom" ==> this will equevalent to the with each others

        <div className={`square-container ${className} ${state === "x" ? "x-color" :"o-color"}`} id={id}>
            {state}
        </div>
    )

}