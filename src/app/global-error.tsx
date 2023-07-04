'use client';

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset, }: { error: Error; reset: () => void;}) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html>
        <body className="h-screen w-screen bg-primary center gap-6 flex-col">
            <h2 className="font-bold text-lg text-secondary">Something went wrong!</h2>
            <div className="center gap-6">
                <button className="bg-transparent border border-secondary px-6 py-4 rounded-[25px] text-secondary text-sm" onClick={() => reset()}>Try again</button>
                <Link href="/">
                    <button className="px-6 py-4 rounded-[25px] text-sm text-black bg-secondary">Back Home</button>
                </Link>
            </div>
        </body>
        </html>
    )
}