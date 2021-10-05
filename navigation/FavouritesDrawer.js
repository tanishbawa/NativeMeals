import React from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FavourtiesStack from "./FavouritesStack";
import FiltersStack from "./FiltersStack";

const FavouritesDrawer = () => {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator
			initialRouteName="FavourtiesStack"
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Drawer.Screen name="Favourties" component={FavourtiesStack} />
			<Drawer.Screen name="Filters" component={FiltersStack} />
		</Drawer.Navigator>
	);
};

export default FavouritesDrawer;
