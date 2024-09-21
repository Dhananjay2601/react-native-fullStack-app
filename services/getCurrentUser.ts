import { Query } from "react-native-appwrite";
import { currentAccount, db } from "../lib/appwrite";

// Get Current User
export const getCurrentUser = async () => {
  try {
    if (!currentAccount) throw Error;

    const currentUser = await db.listDocuments(
      process.env.DATABASE_ID,
      process.env.USER_COLLECTION_ID,
      [Query.equal("accountId", (await currentAccount).$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
