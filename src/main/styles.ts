import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: "#30bced",
  },
  container: {
    backgroundColor: "#ffffff",
  },
  header: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#30bced",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 0 },
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontFamily: "lato",
    color: "#fffaff",
  },
  searchButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#fc5130",
    marginLeft: "3%",
    marginRight: "3%",
  },
  item: {
    marginLeft: 6,
    marginRight: 6,
    marginTop: 4,
    marginBottom: 4,
    borderWidth: 0.5,
    borderColor: "#e2e2e2",
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#FAFFFD",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
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
