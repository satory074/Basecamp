"use client";

import React from "react";

const SoundCloudPlayer = () => {
    return (
        <div className="my-12 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">SoundCloud</h2>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/651754767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
            </div>
            <div className="mt-2 text-xs text-gray-500 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                <a
                    href="https://soundcloud.com/satory43"
                    title="satory074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    satory074
                </a>{" "}
                ·{" "}
                <a
                    href="https://soundcloud.com/satory43/sets/mashup"
                    title="Mashup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Mashup
                </a>
            </div>
        </div>
    );
};

export default SoundCloudPlayer;
