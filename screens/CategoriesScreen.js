import { FlatList, useWindowDimensions } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverView", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onTilePress={pressHandler}
      />
    );
  }
  const { width, height } = useWindowDimensions();
  let columns = 2;
  if (width > height) {
    columns = 3;
  } else {
    columns = 2;
  }
  return (
    <FlatList
      key={columns}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={columns}
    />
  );
}

export default CategoriesScreen;
