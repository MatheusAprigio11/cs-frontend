import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const Cards = (props) => {
	return (
		<View style={styles.containerCards}>
			<View style={styles.componentCard}>
				<Image
					source={{ uri: props.imageUri }}
					onError={(error) => console.log("erro ao carregar", error)}
					style={styles.imagemCard}
				/>
				<View style={styles.textsCard}>
					<Text>{props.title}</Text>
					<Text>R$ {props.price}</Text>
				</View>
			</View>
		</View>
	);
};

export default Cards;
