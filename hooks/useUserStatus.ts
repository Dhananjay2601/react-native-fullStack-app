import { useState } from "react";
import { createUser } from "../services/createUser";
import { SignInFormType, SignUpFormType } from "../components/types";
import { Alert } from "react-native";
import { router } from "expo-router";
import { routeConstant } from "../constants/appConstant";
import { signIn } from "../services/signInUser";
import { useGlobalContext } from "../context/globalProvider";
import { getCurrentUser } from "../services/getCurrentUser";

export const useSignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [signUpform, setSignUpForm] = useState<SignUpFormType>({
    username: "",
    email: "",
    password: "",
  });
  const [signInform, setSignInForm] = useState<SignInFormType>({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const userSignUp = async () => {
    if (
      !signUpform ||
      !signUpform.email ||
      !signUpform.password ||
      !signUpform.username
    ) {
      Alert.alert("Error", "Please fill in all fields");
    }

    const result = await createUser(setIsSubmitting, signUpform);
    setUser(result);
    setIsLoggedIn(true);

    console.log("New User created successfully");
    router.push(routeConstant.HOME);
  };
  const userSignIn = async () => {
    if (!signInform || !signInform.email || !signInform.password) {
      Alert.alert("Error", "Please fill in all fields");
    }

    await signIn(signInform.email, signInform.password);

    const result = await getCurrentUser();
    setUser(result);
    setIsLoggedIn(true);
    console.log("User successfully Signed In");

    router.push(routeConstant.HOME);
  };
  return {
    signUpform,
    setSignUpForm,
    signInform,
    setSignInForm,
    userSignUp,
    isSubmitting,
    setIsSubmitting,
    userSignIn,
  };
};
