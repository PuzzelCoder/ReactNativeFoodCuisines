import { StyleSheet, View, Text } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItems, textStyle]}>{duration} mins</Text>
      <Text style={[styles.detailItems, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItems, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
export default MealDetails;

const styles = StyleSheet.create({
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
});
