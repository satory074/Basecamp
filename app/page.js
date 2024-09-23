// app/page.js
import ArticleList from "./components/ArticleList";
import Parser from "rss-parser";

export const revalidate = 3600; // 1時間ごとに再検証

export default async function Home() {
    const parser = new Parser({
        customFields: {
            item: ["media:content", "enclosure"],
        },
    });

    const feed = await parser.parseURL("https://satory074.hatenablog.com/feed");
    const articles = feed.items.slice(0, 5);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">ようこそ</h1>
            <ArticleList articles={articles} />
        </div>
    );
}
