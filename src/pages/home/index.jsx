import {
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import styles from "./styles";
import instanceML from "../../api/axiosInstanceML";
import { Feather } from "expo-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
	const [produtos, setProdutos] = useState([]);
	const [filterItens, setFilterItens] = useState("Produtos de limpeza");
	const [carrinho, setCarrinho] = useState([]);

	const navigation = useNavigation();

	const addToShoppingCart = (produto) => {
		setCarrinho([...carrinho, produto]);
	};

	if (filterItens === "") {
		setFilterItens("Produtos de limpeza");
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
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.inputFilter}
						onChangeText={(text) => setFilterItens(text)}
						placeholder="Pesquise aqui o produto"
					/>
				</View>
				<View style={styles.cardsContainer}>
					{produtos.map((produto, index) => (
						<Cards
							key={index}
							imageUri={produto.thumbnail}
							title={produto.title}
							price={produto.price}
							onAddToShoppingCart={addToShoppingCart}
						/>
					))}
				</View>
				<View style={styles.extraSpace}></View>
			</ScrollView>
			<TouchableOpacity
				style={styles.shoppingCartButton}
				onPress={() => navigation.navigate("Carrinho", { carrinho: carrinho })}
			>
				<Feather name="shopping-cart" size={35} color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default Home;
