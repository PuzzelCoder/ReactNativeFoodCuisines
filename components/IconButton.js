import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPressIcon }) {
  return (
    <Pressable
      onPress={onPressIcon}
      style={({ pressed }) => {
        pressed && style.pressed;
      }}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
