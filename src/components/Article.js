import React from "react";


function Article({title, date, preview}){
    const isDate = date
    return (
        <article>
            <h3>{title}</h3>
            <small>{isDate ? date : "January 1, 1970"}</small>
            <p>{preview}</p>
        </article>
    )

}


export default Article;