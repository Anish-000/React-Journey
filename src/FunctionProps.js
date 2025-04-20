import React from "react";

function Functionprops(props){
    return(
        <div>
            <h3> Hello ! </h3>,
            <h3> I am {props.name} from {props.place} </h3>
        </div>
    );
}

export default Functionprops;