import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import { getMeals } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text } from "react-native";

const HomePage = () => {
  const [meals, setMeals] = useState([]);

  const loadMeals = async () => {
    const data = await getMeals();
    console.log("Meals have been loaded: ", data);
    setMeals(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>CaloriePal</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals meals={meals} />
    </ScrollView>
  );
};

export default HomePage;
