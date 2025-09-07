import { Text, StyleSheet } from "react-native";

function SubTitle({ children }) {
  return <Text style={styles.subTitle}>{children}</Text>;
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    marginHorizontal: 12,
    marginVertical: 4,
    textAlign: "center",
    padding: 6,
    borderBlockColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
