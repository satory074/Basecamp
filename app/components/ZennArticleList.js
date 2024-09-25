import React from "react";

const ZennArticleList = ({ articles }) => {
    return (
        <div className="my-12 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Zenn 記事一覧</h2>
            <ul className="space-y-4">
                {articles.map((article, index) => (
                    <li key={index} className="border-b pb-2 last:border-b-0">
                        <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {article.title}
                        </a>
                        <p className="text-sm text-gray-600">{new Date(article.pubDate).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ZennArticleList;
