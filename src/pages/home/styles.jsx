import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	scrollView: {
		backgroundColor: "#fff",
		flex: 1,
	},

	cardsContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	inputFilter: {
		backgroundColor: "#E8E8E8",
		borderRadius: 12,
		height: 40,
		width: "90%",
		fontFamily: "regular",
		paddingLeft: 8,
		marginBottom: 20,
	},

	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	},

	shoppingCartButton: {
		position: "absolute",
		bottom: 20,
		right: 20,
		backgroundColor: "white",
		borderRadius: 40,
		elevation: 3,
    height: 65,
    width: 65,
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
    paddingLeft: 0,
    backgroundColor: '#449DD1'
	},
});

export default styles;
