import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import styles from "./styles";
import instanceML from "../../api/axiosInstanceML";

const Home = () => {
	const [produtos, setProdutos] = useState([]);
	const [filterItens, setFilterItens] = useState("Produtos de limpeza");


	if (filterItens === "") {
		setFilterItens("Produtos de limpeza")
	}

	const fetchData = async () => {
		try {
			const response = await instanceML.get(filterItens);
			setProdutos(response.data.results);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, [filterItens]);

	return (
		<ScrollView style={styles.containerHome}>
			<View style={styles.testingsomething}>
			<TextInput
				style={styles.inputFilter}
				onChangeText={(text) => setFilterItens(text)}
				placeholder="Pesquise aqui o produto"
			/>
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
