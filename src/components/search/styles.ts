import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    top: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#30bced",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 0 },
  },
});

export default styles;
