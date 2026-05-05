import { deleteMeal } from "@/storage/meals";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

const MealItem = ({ id, name, calories, protein, carbs, fat, onDelete }) => {
  const handleLongPress = () => {
    Alert.alert("Delete Meal", "Are you sure you want to delete this meal?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteMeal(id);
          onDelete();
        },
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.container} onLongPress={handleLongPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.macros}>
        {calories} cal / {protein}g P / {carbs}g C / {fat}g F
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16213e",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  macros: {
    fontSize: 13,
    color: "#a0a0b0",
    marginTop: 4,
  },
});

export default MealItem;
