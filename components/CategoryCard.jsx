import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20 relative rounded-md"
      />
      <Text className="absolute text-white bottom-0 font-bold pl-1 pb-1">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
