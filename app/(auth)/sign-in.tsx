import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/formField";
import CustomButton from "../../components/customButton";
import { routeConstant } from "../../constants/appConstant";
import { Link } from "expo-router";
import { useSignUp } from "../../hooks/useUserStatus";
const SignIn = () => {
  const { signInform, setSignInForm, userSignIn, isSubmitting } = useSignUp();

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-start min-h-[90vh] px-4 py-6">
          <Image
            source={images.logo}
            className="w-32 h-32"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white  font-psemibold text-center ">
            Log in to <Text className="text-secondary-200">Aora</Text>
          </Text>
          <FormField
            handleTextChange={(e) => setSignInForm({ ...signInform, email: e })}
            keyboardType="email-address"
            styles="mt-7"
            title="Email"
            placeholder="Enter your email"
            value={signInform.email}
          />
          <FormField
            handleTextChange={(e) =>
              setSignInForm({ ...signInform, password: e })
            }
            keyboardType="password"
            styles="mt-7"
            title="Password"
            placeholder="Enter your password"
            value={signInform.password}
          />
          <CustomButton
            handlePress={() => {
              userSignIn();
            }}
            isLoading={isSubmitting}
            title="Sign In"
            containerStyle="w-full mt-7"
            textStyles=""
          />
          <View className="w-full items-center">
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-base text-gray-100 font-pregular">
                Don't have an account?
              </Text>
              <Link
                href={routeConstant.SIGN_UP}
                className="text-base text-secondary font-psemibold"
              >
                Sign Up
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
