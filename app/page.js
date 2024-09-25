// app/page.js
import HatenaArticleList from "./components/HatenaArticleList";
import SoundCloudPlayer from "./components/SoundCloudPlayer";
import ZennArticleList from "./components/ZennArticleList";
import Parser from "rss-parser";

export const revalidate = 3600; // 1時間ごとに再検証

export default async function Home() {
    const parser = new Parser({
        customFields: {
            item: ["media:content", "enclosure"],
        },
    });

    const hatenaFeed = await parser.parseURL("https://satory074.hatenablog.com/feed");
    const hatenaArticles = hatenaFeed.items.slice(0, 5);

    const zennFeed = await parser.parseURL("https://zenn.dev/satory074/feed");
    const zennArticles = zennFeed.items.slice(0, 5);

    return (
        <div className="my-12 p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold my-8">ようこそ</h1>
            <HatenaArticleList articles={hatenaArticles} />
            <ZennArticleList articles={zennArticles} />
            <SoundCloudPlayer />
        </div>
    );
}
