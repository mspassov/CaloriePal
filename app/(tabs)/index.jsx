import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import ShareButton from"@/components/ShareButton"
import { getMeals } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";

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
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>CaloriePal</Text>
        <ShareButton meals={meals}/>
      </View>
      <HomeHeader />
      <MacroGrid meals={meals} />
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
};

export default HomePage;
