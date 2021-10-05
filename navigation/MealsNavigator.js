import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//DRAWERS
import MealsDrawer from "./MealsDrawer";
import FavouritesDrawer from "./FavouritesDrawer";

const MealsNavigator = () => {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, size, color }) => {
						if (route.name === "MealsDrawer") {
							return (
								<Ionicons name="ios-restaurant" size={size} color={color} />
							);
						} else if (route.name === "FavouritesDrawer") {
							return (
								<MaterialIcons name="favorite" size={size} color={color} />
							);
						}
					},
					tabBarLabel: ({ focused }) => {
						if (route.name === "MealsDrawer" && focused) {
							return <Text style={styles.tabBarFont}>Meals</Text>;
						} else if (route.name === "FavouritesDrawer" && focused) {
							return <Text style={styles.tabBarFont}>Favourites</Text>;
						} else {
							return;
						}
					},
					tabBarActiveTintColor: "white",
					tabBarBackground: (props) => (
						<View
							style={{
								backgroundColor:
									route.name === "MealsDrawer"
										? Colors.primaryColor
										: Colors.accentColor,
								height: "100%",
								width: "100%",
							}}
						></View>
					),
					headerShown: false,
				})}
			>
				<Tab.Screen name="MealsDrawer" component={MealsDrawer} />
				<Tab.Screen name="FavouritesDrawer" component={FavouritesDrawer} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	tabBarFont: {
		color: "white",
		fontSize: 13,
	},
});

export default MealsNavigator;
