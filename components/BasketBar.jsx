import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const toFixed = (num, fixed) => {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
};

const BasketBar = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  if (!items.length) return null;
  return (
    <View className="absolute bottom-10 w-full z-50 flex-row justify-center ">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="w-11/12 flex-row justify-between bg-[#00CCBB] rounded-lg px-4 items-center py-2"
      >
        <Text className="text-white font-extrabold text-lg bg-[#618b89de] py-1 px-3 rounded-md">
          {items.length}
        </Text>
        <Text className="text-white font-extrabold text-lg">View Basket</Text>
        <Text className="text-white font-extrabold text-lg">
          ${toFixed(basketTotal, 2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketBar;
