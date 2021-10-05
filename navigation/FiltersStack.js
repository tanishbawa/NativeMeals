import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

//Components
import FiltersScreen from "../screens/FiltersScreen";

const FiltersStack = (props) => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			initialRouteName="FiltersScreen"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="FiltersScreen"
				component={FiltersScreen}
				options={{
					title: "Filters",
				}}
			/>
		</Stack.Navigator>
	);
};

export default FiltersStack;
