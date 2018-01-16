import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    top: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#30bced",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 0 },
  },
  searchBoxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    flex: 0.9,
    backgroundColor: "#ffffff",
    borderRadius: 3,
  },
  searchBox: {
    flex: 1,
    padding: 10,
    color: "#050401",
  },
  cancelSearchButton: {
    marginRight: 5,
  },
});

export default styles;
