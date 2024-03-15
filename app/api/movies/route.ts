import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { db } = await connectToDatabase();
        /*
            This pulls in movies from the default sample_mflix database that is created with default MongoDB Atlas Clusters
            The MONGODB_DB env variable should be set in your env file to "sample_mplix" for this example
        */
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        return NextResponse.json(movies);
    } catch (e) {
        console.log(e);
    }
}
