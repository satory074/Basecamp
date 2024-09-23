// app/layout.js
import "./globals.css";
import NavBar from "./NavBar";

export const metadata = {
    title: "satory074 Basecamp",
    description: "satory074 Homepage",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <body className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
                <footer className="bg-secondary text-white text-center p-4">© 2024 satory074</footer>
            </body>
        </html>
    );
}
