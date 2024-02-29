import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Cadastro = () => {
	const [telefone, setTelefone] = useState("");
	const [password, setPassword] = useState("");
	const [passwordF, setPasswordF] = useState("");

	const navigation = useNavigation();

	return (
		<View style={styles.container}>
      	<Text onPress={() => navigation.navigate("Login")}>Voltar </Text>
			<View style={styles.containerSplash}>
				<Text style={{ fontFamily: "itim", fontSize: 60, color: "#E36588" }}>
					Clean
				</Text>
				<Text style={{ fontFamily: "itim", fontSize: 60, color: "#449DD1" }}>
					Shop
				</Text>
			</View>
			<View style={styles.loginspace}>
				<View style={styles.inputcpfcnpj}>
					<Text style={styles.textsinputs}>Telefone</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => setTelefone(text)}
						value={telefone}
					/>
				</View>
				<View>
					<Text style={styles.textsinputs}>Senha</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => setPassword(text)}
						value={password}
					/>
				</View>
				<View>
					<Text style={styles.textsinputs}>Confirmar Senha</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => setPasswordF(text)}
						value={passwordF}
					/>
				</View>
				<View style={styles.buttonOkView}>
					<TouchableOpacity style={styles.btnOk}>
						<Text style={{ fontFamily: "itim", fontSize: 30, color: "#FFF" }}>
							Logar
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View>
			
			</View>
		</View>
	);
};

export default Cadastro;
