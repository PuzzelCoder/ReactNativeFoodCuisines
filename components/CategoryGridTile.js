import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Platform,
} from "react-native";

function CategoryGridTile({ title, color, onTilePress }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 100;

  if (height > width) {
    imageSize = width / 3.5;
  } else {
    imageSize = width / 4.5;
  }

  return (
    <View style={[styles.gridItem, { width: imageSize }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? [styles.buttonPressed, { backgroundColor: color }] : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onTilePress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    aspectRatio: 1,
    elevation: 4,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
