import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";
import sanityClient from "../../sanity";
import BasketBar from "../../components/BasketBar";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setfeaturedCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
        }
      }    
    `
      )
      .then((data) => setfeaturedCategories(data));
  }, []);

  return (
    <>
      <BasketBar />
      <SafeAreaView className="px-4 pb-14">
        <View className="bg-white pb-4">
          <View className="flex-row pb-3 items-center mt-2 space-x-2">
            <Image
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
              source={{ uri: "https://links.papareact.com/wru" }}
            />
            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs">
                Deliver Now!
              </Text>
              <View className="flex-row items-center space-x-1">
                <Text className="font-bold text-xl">Current Location</Text>
                <ChevronDownIcon size={20} color={"red"} />
              </View>
            </View>
            <UserIcon size={25} color={"red"} />
          </View>

          <View className="flex-row items-center">
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
              className="flex-1 bg-gray-100 placeholder:text-black h-10 px-2 rounded-md"
            />
            <AdjustmentsVerticalIcon size={28} color={"red"} />
          </View>
        </View>

        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Categories */}
          <Categories />

          {/* Featured */}

          {featuredCategories?.map((category) => {
            return (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
