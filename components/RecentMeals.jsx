import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import MealItem from "./MealItem";

const RecentMeals = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      <MealItem
        name="Chicken and Rice"
        calories={540}
        protein={28}
        carbs={21}
        fat={33}
      />
      <MealItem
        name="Protein Shake"
        calories={280}
        protein={30}
        carbs={20}
        fat={8}
      />
      <MealItem
        name="Salmon Salad"
        calories={430}
        protein={35}
        carbs={10}
        fat={25}
      />
      <MealItem
        name="Salmon Salad"
        calories={430}
        protein={35}
        carbs={10}
        fat={25}
      />
      <MealItem
        name="Salmon Salad"
        calories={430}
        protein={35}
        carbs={10}
        fat={25}
      />
      <MealItem
        name="Salmon Salad"
        calories={430}
        protein={35}
        carbs={10}
        fat={25}
      />
      <MealItem
        name="Salmon Salad"
        calories={430}
        protein={35}
        carbs={10}
        fat={25}
      />
    </View>
  );
};

export default RecentMeals;
