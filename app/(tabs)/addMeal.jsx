import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";
import AddMealForm from "@/components/AddMealForm";

const AddMealPage = () => {
  return <ScrollView style={globalStyles.container}>
    <AddMealForm />
  </ScrollView>;
};

export default AddMealPage;
