import { ID } from "react-native-appwrite";
import { account, avatar, db } from "../lib/appwrite";
import { SignUpFormType } from "../components/types";
import { signIn } from "./signInUser";

export const createUser = async (
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  form: SignUpFormType
) => {
  try {
    setIsSubmitting(true);
    const newAccount = await account.create(
      ID.unique(),
      form.email,
      form.password,
      form.username
    );

    if (!newAccount) throw new Error("Failed to create account!");

    const avatarUrl = avatar.getInitials(form.username);

    await signIn(form.email, form.password);

    const newUser = await db.createDocument(
      process.env.DATABASE_ID,
      process.env.USER_COLLECTION_ID,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: form.email,
        username: form.username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log("Error", error);
    throw new Error(error);
  } finally {
    setIsSubmitting(false);
  }
};
