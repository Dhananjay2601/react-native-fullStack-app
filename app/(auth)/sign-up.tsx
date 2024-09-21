import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/formField";
import { SignUpFormType } from "../../components/types";
import CustomButton from "../../components/customButton";
import { routeConstant } from "../../constants/appConstant";
import { Link, router } from "expo-router";
import { createUser } from "../../services/createUser";
const SignUp = () => {
  const [form, setForm] = useState<SignUpFormType>({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
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
            Sign up to <Text className="text-secondary-200">Aora</Text>
          </Text>
          <FormField
            handleTextChange={(e) => setForm({ ...form, username: e })}
            keyboardType="text"
            styles="mt-7"
            title="Username"
            placeholder="Enter your name"
            value={form.username}
          />
          <FormField
            handleTextChange={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            styles="mt-7"
            title="Email"
            placeholder="Enter your email"
            value={form.email}
          />
          <FormField
            handleTextChange={(e) => setForm({ ...form, password: e })}
            keyboardType="password"
            styles="mt-7"
            title="Password"
            placeholder="Enter your password"
            value={form.password}
          />
          <CustomButton
            handlePress={() => router.push(routeConstant.HOME)}
            isLoading={isSubmitting}
            title="Sign Up"
            containerStyle="w-full mt-7"
            textStyles=""
          />
          <View className="w-full items-center">
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-base text-gray-100 font-pregular">
                Have an account already?
              </Text>
              <Link
                href={routeConstant.SIGN_IN}
                className="text-base text-secondary font-psemibold"
              >
                Sign In
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
