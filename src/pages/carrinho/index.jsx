import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Carrinho = ({ route }) => {
	const [fullPrice, setFullPrice] = useState(0);

	const carrinho = route.params.carrinho;

	useEffect(() => {
		const calcularPrecoTotal = () => {
			let total = 0;
			carrinho.forEach((produto) => {
				total += parseFloat(produto.price);
			});
			return total;
		};

		// Calcula o preço total apenas uma vez após a montagem inicial do componente
		setFullPrice(calcularPrecoTotal());
	}, [carrinho]);

	if (!route.params || !route.params.carrinho) {
		return <Text>Nenhum item no carrinho</Text>;
	}
	return (
		<View>
			{carrinho.map((produto, index) => (
				<View key={index}>
					<Image
						source={{ uri: produto.imageUri }}
						onError={(error) => console.log("erro ao carregar", error)}
					/>
					<Text>{produto.title}</Text>
					<Text>{produto.price}</Text>
				</View>
			))}
			<View>
				<Text>Total: R$ {fullPrice.toFixed(2)}</Text>
			</View>
		</View>
	);
};

export default Carrinho;
