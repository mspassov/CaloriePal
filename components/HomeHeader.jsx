import { globalStyles } from "@/styles/global.js";
import { StyleSheet, Text, View } from "react-native";

const HomeHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <View style={globalStyles.header}>
      <Text style={styles.date}>{currentDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
    marginBottom: 30,
  },
});

export default HomeHeader;
