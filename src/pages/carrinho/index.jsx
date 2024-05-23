import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removerItem } from "../../../services/reducers/carrinhoActions";
import { removeFromCart } from "../../../services/reducers/carrinhoReducer";
import styles from "./styles";
import instancePedrinho from "../../api/axiosInstancePedrinho";

const Carrinho = ({ route }) => {
	const [fullPrice, setFullPrice] = useState(0);
	const [cartItems, setCartItems] = useState(route.params.carrinho);
	const dispatch = useDispatch();

	useEffect(() => {
		setCartItems(cartItems);
	}, [cartItems]);

	useEffect(() => {
		const calcularPrecoTotal = () => {
			let total = 0;
			cartItems.forEach((produto) => {
				total += parseFloat(produto.price);
			});
			return total;
		};

		// Calcula o preço total apenas uma vez após a montagem inicial do componente
		setFullPrice(calcularPrecoTotal());
	}, [cartItems]);

	const handleRemoverItem = (index) => {
		dispatch(removeFromCart(index));
		setCartItems((prevCartItems) =>
			prevCartItems.filter((_, idx) => idx !== index)
		);
	};

	if (!cartItems || cartItems.length === 0) {
		return <Text>Nenhum item no carrinho</Text>;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.txtCart}>Carrinho</Text>
			{cartItems.map((produto, index) => (
				<View key={index} style={styles.productsInfo}>
					<Image
						source={{ uri: produto.imageUri }}
						onError={(error) => console.log("erro ao carregar", error)}
					/>
					<Text>{produto.title}</Text>
					<Text>{produto.price}</Text>
					<TouchableOpacity
						onPress={() => {
							handleRemoverItem(index), handleRemoverItem(produto);
						}}
					>
						<FontAwesome name="trash-o" size={24} color="black" />
					</TouchableOpacity>
				</View>
			))}
			<View>
				<Text>Total: R$ {fullPrice.toFixed(2)}</Text>
			</View>
			<TouchableOpacity
				onPress={() => instancePedrinho.post("/product/create", {
					name: cartItems[0].title,
					x: "123",
					y: "123",
				})}
			>
				<Text>Aqui</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Carrinho;
