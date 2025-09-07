import { useContext } from "react";
import { MealsList } from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavouritesContext } from "../store/context/favorites-context";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
function FavouriteScreen() {
  // const favContext = useContext(FavouritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favContext.ids.includes(meal.id)
    favoriteMealIds?.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Ionicons size={24} color="white" name="star" />
        <Text style={styles.textStyle}>No Favourites yet !</Text>
      </View>
    );
  }

  return (screen = <MealsList items={favoriteMeals} />);
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
