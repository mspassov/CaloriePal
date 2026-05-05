import { StyleSheet, View } from "react-native";
import MacroCard from "./MacroCard";

const MacroGrid = ({ meals }) => {
  const calories = meals.reduce((accum, curr) => accum + Number(curr.calories), 0);
  const protein = meals.reduce((accum, curr) => accum + Number(curr.protein), 0);
  const carbs = meals.reduce((accum, curr) => accum + Number(curr.carbs), 0);
  const fat = meals.reduce((accum, curr) => accum + Number(curr.fat), 0);

  return (
    <View style={styles.grid}>
      <MacroCard label="Calories" value={calories} goal="2,000" color="#ff6b6b" />
      <MacroCard label="Protein" value={protein} goal="150g" color="#4ecdc4" />
      <MacroCard label="Carbs" value={carbs} goal="250g" color="#ffd93d" />
      <MacroCard label="Fat" value={fat} goal="65g" color="#6bcb77" />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});

export default MacroGrid;
