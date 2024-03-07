import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
	const navigation = useNavigation();
	const [telefone, setTelefone] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.container}>
			<View style={styles.containerLogo}>
				<Image
					source={require("../../assets/CShop.png")}
					style={{ width: "100%", marginBottom: 0 }}
					resizeMode="contain"
				/>
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
				<Text style={styles.criarConta} onPress={() => navigation.navigate('Cadastro')}>Criar conta</Text>
				<View style={styles.buttonOkView}>
					<TouchableOpacity style={styles.btnOk} onPress={() => navigation.navigate('Home')}>
						<Text style={{ fontFamily: "itim", fontSize: 30, color: "#FFF" }}>
							Logar
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Login;
