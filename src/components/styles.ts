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
    backgroundColor: "#30bced",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 0 },
  },
  headerText: {
    fontSize: 18,
    fontFamily: "lato",
    color: "#fffaff",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#fc5130",
    marginLeft: "3%",
    marginRight: "3%",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#FAFFFD",
  },
  itemSummary: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    top: -5,
  },
  iconImage: {
    height: 30,
    width: 30,
  },
  nameSymbol: {
    display: "flex",
    flexDirection: "row",
    width: 150,
    left: 10,
  },
  symbol: {
    fontFamily: "lato",
    fontWeight: "bold",
    color: "#fc5130",
    fontSize: 16,
  },
  name: {
    fontFamily: "lato",
    color: "#fc5130",
    fontSize: 16,
  },
  price: {
    left: 50,
    fontFamily: "lato",
    fontWeight: "bold",
    color: "#303036",
  },
  itemDetails: {
    top: 5,
    left: 40,
    display: "flex",
    flexDirection: "row",
  },
  hourlyChange: {
    display: "flex",
    flexDirection: "row",
    width: 190,
  },
  changeLabel: {
    fontFamily: "lato",
    fontSize: 12,
    color: "#050401",
  },
  changePositive: {
    fontFamily: "lato",
    fontSize: 12,
    fontWeight: "bold",
    color: "green",
  },
  changeNegative: {
    fontFamily: "lato",
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
});

export default styles;
