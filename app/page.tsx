import { connectToDatabase } from "../lib/mongodb";

export default async function Home() {
    const { client } = await connectToDatabase();
    const isConnected = client ? true : false;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <main className="flex-1 flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to{" "}
                    <a href="https://nextjs.org" className="text-blue-600">
                        Next.js with MongoDB!
                    </a>
                </h1>

                {isConnected ? (
                    <h2 className="text-2xl mb-4">
                        You are connected to MongoDB
                    </h2>
                ) : (
                    <h2 className="text-2xl mb-4">
                        You are NOT connected to MongoDB. Check the{" "}
                        <code className="bg-gray-100 rounded-md px-2 py-1">
                            README.md
                        </code>{" "}
                        for instructions.
                    </h2>
                )}

                <p className="text-xl text-center mb-8">
                    Get started by editing{" "}
                    <code className="bg-gray-100 rounded-md px-2 py-1">
                        app/page.tsx
                    </code>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                    <a
                        href="https://nextjs.org/docs"
                        className="border border-gray-300 rounded-lg p-6 hover:border-blue-600 hover:text-blue-600"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            Documentation &rarr;
                        </h3>
                        <p className="text-lg">
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn"
                        className="border border-gray-300 rounded-lg p-6 hover:border-blue-600 hover:text-blue-600"
                    >
                        <h3 className="text-xl font-bold mb-2">Learn &rarr;</h3>
                        <p className="text-lg">
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className="border border-gray-300 rounded-lg p-6 hover:border-blue-600 hover:text-blue-600"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            Examples &rarr;
                        </h3>
                        <p className="text-lg">
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 rounded-lg p-6 hover:border-blue-600 hover:text-blue-600"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            Deploy &rarr;
                        </h3>
                        <p className="text-lg">
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className="w-full h-24 border-t border-gray-200 flex items-center justify-center">
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="h-4 ml-2"
                    />
                </a>
            </footer>
        </div>
    );
}
