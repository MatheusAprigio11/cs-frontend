import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import styles from "./styles";
import instanceML from "../../api/axiosInstanceML";

const Home = () => {
	const [produtos, setProdutos] = useState([]);

	const fetchData = async () => {
		try {
			const response = await instanceML.get("produtos de limpeza");
			setProdutos(response.data.results);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<ScrollView style={styles.containerHome}>
			<View style={styles.testingsomething}>
				{produtos.map((produto, index) => (
					<Cards
						key={index}
						imageUri={produto.thumbnail}
						title={produto.title}
						price={produto.price}
					/>
				))}
			</View>
		</ScrollView>
	);
};

export default Home;
