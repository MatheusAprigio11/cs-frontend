import { View, Text } from "react-native";
import React from "react";
import Cards from "../../components/Cards/Cards";
import styles from "./styles";

const Home = () => {
	return (
		<View>
			<View style={styles.testingsomething}>
				<Cards />
			</View>
		</View>
	);
};

export default Home;
