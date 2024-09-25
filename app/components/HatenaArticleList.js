// app/components/ArticleList.js
export default function HatenaArticleList({ articles }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">はてなブログ</h2>
            <ul className="space-y-8">
                {articles.map((item) => {
                    // 概要の調整
                    const summary = item.contentSnippet || item.description || "";
                    const maxLength = 100; // 文字数制限
                    const truncatedSummary =
                        summary.length > maxLength ? summary.substring(0, maxLength) + "..." : summary;

                    // アイキャッチ画像の取得
                    let imageUrl = "";
                    if (item.enclosure && item.enclosure.url) {
                        imageUrl = item.enclosure.url;
                    } else if (item["media:content"] && item["media:content"]["$"] && item["media:content"]["$"].url) {
                        imageUrl = item["media:content"]["$"].url;
                    }

                    return (
                        <li key={item.link} className="border-b pb-4 flex flex-col md:flex-row">
                            {imageUrl && (
                                <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4">
                                    <img src={imageUrl} alt={item.title} className="w-full h-auto object-cover" />
                                </div>
                            )}
                            <div className="flex-1">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary-dark hover:underline text-xl font-medium transition-colors duration-300"
                                >
                                    {item.title}
                                </a>
                                <p className="text-gray-600 text-sm">{new Date(item.pubDate).toLocaleDateString()}</p>
                                {/* 概要を表示 */}
                                {truncatedSummary && <p className="text-gray-700 mt-2">{truncatedSummary}</p>}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
