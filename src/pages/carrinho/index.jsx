import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removerItem } from "../../../services/reducers/carrinhoActions";
import { removeFromCart } from "../../../services/reducers/carrinhoReducer";

const Carrinho = ({ route }) => {
	const [fullPrice, setFullPrice] = useState(0);
	const dispatch = useDispatch();

	const handleRemoverItem = (index) => {
		dispatch(removeFromCart(index));
	};

	const { carrinho } = route.params;

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

	if (!carrinho || carrinho.length === 0) {
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
					<TouchableOpacity onPress={() => handleRemoverItem(produto)}>
						<FontAwesome name="trash-o" size={24} color="black" />
					</TouchableOpacity>
				</View>
			))}
			<View>
				<Text>Total: R$ {fullPrice.toFixed(2)}</Text>
			</View>
		</View>
	);
};

export default Carrinho;
