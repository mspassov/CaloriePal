import MealItem from "@/components/MealItem";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";

const RecentMeals = ({ meals, onDelete }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>

      {meals.length == 0 ? (
        <Text style={globalStyles.empty}>No meals have been logged yet.</Text>
      ) : (
        meals
          .slice(0, 5)
          .map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={Number(meal.calories)}
              protein={Number(meal.protein)}
              carbs={Number(meal.carbs)}
              fat={Number(meal.fat)}
              onDelete={onDelete}
            />
          ))
      )}
    </View>
  );
};

export default RecentMeals;
