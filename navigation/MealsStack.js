import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";

//Components
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsStack = (props) => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			initialRouteName="Categories"
			screenOptions={{
				headerStyle: { backgroundColor: Colors.primaryColor },
				headerTintColor: "white",
				
			}}
		>
			<Stack.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "Meal Categories",
				}}
			/>
			<Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={{
					title: "Meals",
				}} />
			<Stack.Screen name="MealDetails" component={MealDetailScreen} />
		</Stack.Navigator>
	);
};

export default MealsStack;
