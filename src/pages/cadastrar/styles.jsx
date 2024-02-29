import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  containerSplash: {
		flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 80
	},

  voltarText: {
    fontFamily: 'itim',
  },

  loginspace: {
		paddingStart: "5%",
		paddingEnd: "5%",
		height: "50%",
		marginBottom: "25%",
	},

	inputcpfcnpj: {
		paddingTop: "0%",
	},

	textsinputs: {
		fontFamily: "itim",
		color: "#8B8B8B",
		fontSize: 27,
		marginBottom: 4,
		textAlign: "center",
		paddingTop: 10,
		flex: 0,
	},
	input: {
		backgroundColor: "#E8E8E8",
		borderRadius: 12,
		height: 60,
		width: "90%",
		fontFamily: "regular",
		paddingLeft: 8,
		marginLeft: "4.5%",
	},
	buttonOkView: {
		justifyContent: "center",
		alignItems: "center",
	},
	btnOk: {
		justifyContent: "center",
		borderRadius: 20,
		alignItems: "center",
		backgroundColor: "#E36588",
		width: "90%",
		height: "42%",
	},
	criarConta: {
		fontSize: 26,
		fontFamily: "itim",
		color: "#7B7B7B",
    marginTop: 70,

	},
});

export default styles;