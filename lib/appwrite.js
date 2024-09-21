import { Account, Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: process.env.END_POINT,
  projectId: process.env.PROJECT_ID,
  platform: process.env.PLATFORM,
  databaseId: process.env.DATABASE_ID,
  userColletionId: process.env.USER_COLLECTION_ID,
  videoColletionId: process.env.VIDEO_COLLECTION_ID,
  storageId: process.env.STORAGE_ID,
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

//Account instance
export const account = new Account(client);
