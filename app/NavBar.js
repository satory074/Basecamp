// app/NavBar.js
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-primary p-4">
            <ul className="flex flex-col md:flex-row md:space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-gray-200 block py-2 md:py-0">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/app1" className="text-white hover:text-gray-200 block py-2 md:py-0">
                        App1
                    </Link>
                </li>
                <li>
                    <Link href="/app2" className="text-white hover:text-gray-200 block py-2 md:py-0">
                        App2
                    </Link>
                </li>
                {/* 他のアプリケーションへのリンクを追加 */}
            </ul>
        </nav>
    );
}
