import React from "react";


function Article({title, date, preview, minutes}){
    const isDate = date
    let time = "";
    let cups;
    let boxes;
    let i = 0;
    if (minutes < '30'){
        cups = Math.ceil(minutes / 5);
        while (i < cups){
            time += "🍵";
            i++;
        }
    }
    else if (minutes >= '30'){
        boxes = Math.ceil(minutes / 10);
        while (i < boxes){
            time += "🍱";
            i++;
        }
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{isDate ? date : "January 1, 1970"} ~ {time} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )

};


export default Article;