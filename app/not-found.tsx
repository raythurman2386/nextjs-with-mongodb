import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#000] text-white flex flex-col justify-center items-center p-4">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    404 - Page Not Found
                </h1>
                <p className="text-lg">
                    The page you are looking for does not exist.
                </p>
            </header>
            <div className="flex flex-col items-center">
                <Link
                    href="/"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}
