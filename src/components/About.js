import React from "react";

function About(props){
    const firstImage = props.image;
    return (
        <aside>
            <img src={firstImage ? props.image : "https://via.placeholder.com/215"}  alt="blog logo" />
            <p>{props.about}</p>
        </aside>
    )
}


export default About; 