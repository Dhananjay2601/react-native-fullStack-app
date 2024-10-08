import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";

export type FormFieldProps = {
  title: string;
  value: string;
  handleTextChange: (e) => void;
  styles?: string;
  keyboardType: string;
  placeholder?: string;
};

const FormField = ({
  handleTextChange,
  keyboardType,
  styles,
  title,
  value,
  placeholder,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${styles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="!w-full h-16 bg-black-100 px-4 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-base !text-white font-psemibold"
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleTextChange}
          value={value}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
