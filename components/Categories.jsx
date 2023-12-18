import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 5,
        paddingTop: 10,
        gap: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category1"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category2"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category3"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category4"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category5"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category6"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category7"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category8"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category9"}
      />
      <CategoryCard
        imgUrl={
          "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        }
        title={"category0"}
      />
    </ScrollView>
  );
};

export default Categories;
