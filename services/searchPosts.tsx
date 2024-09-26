import { Query } from "react-native-appwrite";
import { db } from "../lib/appwrite";

export const searchPosts = async (query) => {
  try {
    const posts = await db.listDocuments(
      process.env.DATABASE_ID,
      process.env.VIDEO_COLLECTION_ID,
      [Query.search("title", query)]
    );
    return posts.documents;
  } catch (error) {
    console.log("Error:", error);
    throw new Error(error);
  }
};
