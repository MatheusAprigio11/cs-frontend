import { View, Text } from "react-native";
import React from "react";
import Cards from "../../components/Cards/Cards";
import styles from "./styles";

const Home = () => {
	const [produtos, setProdutos] = useState([]);

	const fetchData = async () => {
		try {
			const data = await instanceML.get(searchProduct);
			setProdutos(data.data);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	useEffect(() => {
		fetchData();
	});
	return (
		<View>
			<View style={styles.testingsomething}>
				<Cards />
			</View>
		</View>
	);
};

export default Home;
