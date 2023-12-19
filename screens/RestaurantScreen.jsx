import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketBar from "../components/BasketBar";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant, setRestaurant } from "../features/restaurantSlice";
import { emptyBasket, selectBasketItems } from "../features/basketSlice";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => selectRestaurant(state));
  const items = useSelector((state) => selectBasketItems(state));
  const [newRestaurantPopup, setnewRestaurantPopup] = useState(
    restaurant?.id !== id && items.length
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    if (!newRestaurantPopup) {
      dispatch(
        setRestaurant({
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
          dishes,
          long,
          lat,
        })
      );
    }
  }, [newRestaurantPopup]);
  if (newRestaurantPopup && items.length) {
    return (
      <View className="h-full items-center justify-center">
        <View className="justify-center items-center bg-[#00CCBB] px-8 py-6 rounded-lg">
          <Text className="font-extrabold text-white">
            If you choose items from new restaurant, previous basket will be
            lost.
          </Text>
          <Text className="text-red-600">Are you sure to proceed?</Text>
          <TouchableOpacity
            className="px-6 py-2 rounded-md bg-green-600 mb-2 mt-2"
            onPress={() => {
              setnewRestaurantPopup(false);
              dispatch(emptyBasket());
            }}
          >
            <Text className="text-white font-bold">Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="px-6 py-2 rounded-md bg-red-600"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white font-bold">No</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <>
        <BasketBar />

        <ScrollView>
          <View className="relative">
            <Image
              source={{
                uri: urlFor(imgUrl).url(),
              }}
              className="h-56 w-full bg-gray-300 p-4"
            />
            <TouchableOpacity
              onPress={navigation.goBack}
              className="absolute top-14 left-5 bg-gray-100 p-2 rounded-full"
            >
              <ArrowLeftIcon size={20} color="#00CCBB" />
            </TouchableOpacity>
          </View>

          <View className="bg-white">
            <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row my-1 space-x-2">
                <View className="flex-row items-center space-x-1">
                  <StarIcon color="green" opacity={0.5} size={22} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> · {genre}
                  </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                  <MapIcon color="gray" opacity={0.4} size={22} />
                  <Text className="text-xs text-gray-500">
                    Nearby · {address}
                  </Text>
                </View>
              </View>

              <Text className="text-gray-500 mt-2 pb-4">
                {shortDescription}
              </Text>
            </View>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
              <Text className="pl-2 flex-1 text-sm font-bold">
                Have a food allergy?
              </Text>
              <ChevronRightIcon color="#00CCBB" />
            </TouchableOpacity>
          </View>

          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

            {/* Dishrows */}
            {dishes?.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </ScrollView>
      </>
    );
  }
};

export default RestaurantScreen;
