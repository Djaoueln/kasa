
import React from "react";
import "../styles/Tag.scss";


function Tag(props){
    return (
        <div className="tag">
            <span className="tag_text">{props.text}</span>
        </div>
    )
}

export default Tag;
