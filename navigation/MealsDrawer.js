import React from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Colors from "../constants/Colors";

import MealsStack from "./MealsStack";
import FiltersStack from "./FiltersStack";

const MealsDrawer = () => {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator
			initialRouteName="MealsStack"
			screenOptions={() => ({
                drawerActiveTintColor: Colors.accentColor,
                drawerInactiveTintColor: 'black',
                drawerLabelStyle: {fontWeight: 'bold'},
				headerShown: false,
			})}
		>
			<Drawer.Screen name="Meals" component={MealsStack} />
			<Drawer.Screen name="Filters" component={FiltersStack} />
		</Drawer.Navigator>
	);
};

export default MealsDrawer;
