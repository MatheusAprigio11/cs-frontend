import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Feather } from "expo-vector-icons";

const Cards = (props) => {
	const addToShoppingCart = () => {
		props.onAddToShoppingCart({
			title: props.title,
			price: props.price,
			imageUri: props.imageUri,
		});
	};

	return (
		<View style={styles.containerCards}>
			<View style={styles.componentCard}>
				<Image
					source={{ uri: props.imageUri }}
					onError={(error) => console.log("erro ao carregar", error)}
					style={styles.imagemCard}
				/>
				<View style={styles.textsCard}>
					<Text numberOfLines={3} ellipsizeMode="tail">
						{props.title}
					</Text>
					<View style={styles.priceShoppingCart}>
						<Text>R$ {props.price}</Text>
						<TouchableOpacity onPress={addToShoppingCart}>
							<Feather name="shopping-cart" size={24} color="black" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Cards;
