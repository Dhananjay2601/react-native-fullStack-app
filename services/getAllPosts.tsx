import { db } from "../lib/appwrite";

export const getAllPosts = async () => {
  try {
    const posts = await db.listDocuments(
      process.env.DATABASE_ID,
      process.env.VIDEO_COLLECTION_ID
    );
    return posts.documents;
  } catch (error) {
    console.log("Error:", error);
    throw new Error(error);
  }
};
