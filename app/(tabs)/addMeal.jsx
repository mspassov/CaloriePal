import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

const AddMealPage = () => {
  return (
    <ScrollView style={globalStyles.container}>
        <Text style={{color: "white"}}>Add Meal Form</Text>
    </ScrollView>
  );
};

export default AddMealPage;
