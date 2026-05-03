import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

const HomePage = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>CaloriePal</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
};

export default HomePage;
