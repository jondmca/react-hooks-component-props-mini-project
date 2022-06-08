import React, { useState } from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articleElements = posts.map((article) => {
    return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes} />});

    return (
        <div>
            <main>
                {articleElements}
            </main>
       </div>
    )
};



export default ArticleList;