import HomeHeader from "@/components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

const HomePage = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>CaloriePal</Text>
      <HomeHeader />
      <Link href="/meals" style={{ color: "white", fontSize: 28 }}>
        Go to Meals
      </Link>
    </ScrollView>
  );
};

export default HomePage;
