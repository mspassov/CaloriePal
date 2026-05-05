import { colors } from "@/styles/global.js";
import { Ionicons } from "@expo/vector-icons";
import { Share, TouchableOpacity } from "react-native";

const ShareButton = ({ meals }) => {
  const handleshare = async () => {
    const totals = meals.reduce(
      (accum, curr) => ({
        calories: accum.calories + Number(curr.calories),
        protein: accum.protein + Number(curr.protein),
        carbs: accum.carbs + Number(curr.carbs),
        fat: accum.fat + Number(curr.fat),
      }),
      { calories: 0, carbs: 0, protein: 0, fat: 0 },
    );

    Share.share({
      message: `CaloriePal Daily Summary: \n\n
            Calories: ${totals.calories}
            Protein: ${totals.protein}
            Carbs: ${totals.carbs}
            Fat: ${totals.fat}
            `,
    });
  };

  return (
    <TouchableOpacity onPress={handleshare}>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default ShareButton;
