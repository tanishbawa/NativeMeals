import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";

//Components
import FavouritesScreen from "../screens/FavouritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const FavourtiesStack = (props) => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			initialRouteName="Favourites"
			screenOptions={{
				headerStyle: { backgroundColor: Colors.primaryColor },
				headerTintColor: "white",
			}}
		>
			<Stack.Screen
				name="Favourites"
				component={FavouritesScreen}
				options={{
					title: "Favourite Meals",
				}}
			/>
			<Stack.Screen name="MealDetails" component={MealDetailScreen} />
		</Stack.Navigator>
	);
};

export default FavourtiesStack;
