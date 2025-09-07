import { /*useContext,*/ useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDeal/SubTitle";
import List from "../components/MealDeal/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavouritesContext } from "../store/context/favorites-context";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();
  // const favouritesContext = useContext(FavouritesContext);
  // const isFavoriteMeal = favouritesContext.ids.includes(mealId);
  const isFavoriteMeal = favoriteMealIds?.includes(mealId);
  function changeFavoritesStatusHandler() {
    if (isFavoriteMeal) {
      // favouritesContext.removeFavorite(mealId;
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favouritesContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerBackTitle: "Back",
      headerRight: () => {
        return (
          <IconButton
            icon={isFavoriteMeal ? "star" : "star-outline"}
            color="white"
            onPressIcon={changeFavoritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
      </View>
      <MealDetails
        duration={meal.duration}
        affordability={meal.affordability}
        complexity={meal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOutContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingrediants</SubTitle>
          <List>{meal.ingredients}</List>

          <SubTitle>Steps</SubTitle>
          <List>{meal.steps}</List>
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItems: {
    fontSize: 14,
    marginHorizontal: 6,
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOutContainer: {
    alignItems: "center",
  },
});
