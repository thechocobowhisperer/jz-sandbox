import React from 'react';
 
const button = ( props ) => {
    return(
        <div>
            <button onClick={props.alert}>{props.children}</button>
        </div>
    )
}
export default button;