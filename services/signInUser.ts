import { account } from "../lib/appwrite";

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    console.log("Error", error);
    throw new Error(error);
  }
};
