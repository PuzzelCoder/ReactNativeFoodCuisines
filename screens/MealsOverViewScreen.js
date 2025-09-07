import { StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList/MealsList";
function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const categoryMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
      headerBackTitle: "Back",
    });
  }, [catId, navigation]);

  return <MealsList items={categoryMeals}></MealsList>;
}
export default MealsOverViewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});
