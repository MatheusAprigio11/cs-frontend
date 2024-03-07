import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import Cadastro from "../pages/cadastrar";
import Home from "../pages/home";

const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Cadastro"
				component={Cadastro}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
