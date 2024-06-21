import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { connectToDatabase } from "@/lib/mongodb";
import Link from "next/link";

export default async function Home() {
    const DEPLOY_LINK = process.env.NEXT_PUBLIC_DEPLOY_LINK || "";
    const { client } = await connectToDatabase();
    const isConnected = client ? true : false;

    return (
        <div className="min-h-screen bg-[#000] text-white flex flex-col justify-center items-center p-4">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    Welcome to Next.js with MongoDB!
                </h1>
                <p className="text-lg">
                    {isConnected
                        ? "You are connected to MongoDB"
                        : "Connection Failed"}
                </p>
                <p className="text-sm mt-4">
                    Get started by editing{" "}
                    <code className="bg-[#333] p-1 rounded">app/page.tsx</code>
                </p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
                <Card className="bg-[#111] text-white">
                    <CardHeader>
                        <CardTitle>Documentation</CardTitle>
                        <CardDescription>
                            Find in-depth information about Next.js features and
                            API.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="#"
                            className="text-blue-500"
                            prefetch={false}
                        >
                            Learn more →
                        </Link>
                    </CardContent>
                </Card>
                <Card className="bg-[#111] text-white">
                    <CardHeader>
                        <CardTitle>Learn</CardTitle>
                        <CardDescription>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="#"
                            className="text-blue-500"
                            prefetch={false}
                        >
                            Start learning →
                        </Link>
                    </CardContent>
                </Card>
                <Card className="bg-[#111] text-white">
                    <CardHeader>
                        <CardTitle>Examples</CardTitle>
                        <CardDescription>
                            Discover boilerplate examples for MongoDB, Sanity,
                            PostgreSQL, and a blank template with hooks.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="#"
                            className="text-blue-500"
                            prefetch={false}
                        >
                            Explore examples →
                        </Link>
                    </CardContent>
                </Card>
                <Card className="bg-[#111] text-white">
                    <CardHeader>
                        <CardTitle>Deploy</CardTitle>
                        <CardDescription>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href={DEPLOY_LINK}
                            className="text-blue-500"
                            prefetch={false}
                        >
                            Deploy →
                        </Link>
                    </CardContent>
                </Card>
            </div>
            <footer className="mt-8">
                <p className="text-xs">
                    Powered by{" "}
                    <a href="#" className="text-blue-500">
                        Vercel
                    </a>
                </p>
            </footer>
        </div>
    );
}
