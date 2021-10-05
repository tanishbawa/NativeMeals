import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import MealsList from "../components/MealsList";

const FavouritesScreen = (props) => {
	const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);

	const { navigation } = props;
	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerLeft: () => (
				<Ionicons
					onPress={() => navigation.toggleDrawer()}
					name="ios-menu"
					size={30}
					color="white"
					style={{ marginRight: 10 }}
				/>
			),
		});
	}, [navigation]);

	if (favouriteMeals.length === 0) {
		return <Text style={styles.emptyListText}>No Favourites!</Text>;
	}

	return <MealsList listData={favouriteMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
	emptyListText: {
		flex: 1,
		textAlign: "center",
		textAlignVertical: "center",
	},
});

export default FavouritesScreen;
