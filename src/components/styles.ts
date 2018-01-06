import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    top: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3C91E6",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 0 },
  },
  headerText: {
    fontSize: 22,
    fontFamily: "lato",
    color: "#FAFFFD",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#D1D1D0",
    marginLeft: "2%",
    marginRight: "2%",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
    backgroundColor: "#ffffff",
  },
  itemSummary: {
    display: "flex",
    flexDirection: "row",
  },
  nameSymbol: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
  },
  name: {
    fontFamily: "lato",
    color: "#FA824C",
    fontSize: 16,
  },
  price: {
    left: 50,
    fontFamily: "lato",
    color: "#342E37",
  },
  itemDetails: {
    top: 15,
    display: "flex",
    flexDirection: "row",
  },
  hourlyChange: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
  },
  changeLabel: {
    fontFamily: "lato",
    fontSize: 12,
    color: "#342E37",
  },
  changePositive: {
    fontFamily: "lato",
    fontSize: 12,
    color: "green",
  },
  changeNegative: {
    fontFamily: "lato",
    fontSize: 12,
    color: "red",
  },
});

export default styles;
