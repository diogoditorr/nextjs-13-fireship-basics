import Link from "next/link";
import React, { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <head></head>
            <body>
                <main>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/notes">Notes</Link>
                    </nav>
                    {children}
                </main>
            </body>
        </html>
    );
}
