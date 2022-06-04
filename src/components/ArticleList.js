import React from "react";
import Article from "./Article";

function ArticleList({articles}){
    //console.log(articles);
    const articleElements = articles.map((article) => <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes} />);

    return (
        <div>
            <main>
                {articleElements}
            </main>
       </div>
    )
};



export default ArticleList;