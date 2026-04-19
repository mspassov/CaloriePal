import { globalStyles } from "@/styles/global.js";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Weclome to CaloriePal!</Text>
    </View>
  );
}
