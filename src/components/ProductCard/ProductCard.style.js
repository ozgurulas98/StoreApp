import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    backgroundColor: "#eeeeee",
    margin: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white"
  },
  body_container: {
    padding:5,
    flex:1,
    justifyContent: 'space-between'
  },
  title: {
    fontWeight:"bold",
    fontSize:17
  },
  price: {
    textAlign: "right",
    fontSize: 15,
    fontStyle:"italic"
  },
});
