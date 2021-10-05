import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList";

const CategoryMealScreen = (props) => {
	const { categoryId } = props.route.params;

	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

	const displayMeals = availableMeals.filter(
		(meal) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	const { navigation } = props;
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: selectedCategory.title,
		});
	}, [navigation]);

	if (displayMeals.length === 0) {
		return (
			<View style={styles.emptyText}>
				<Text>No meals to display. Check filters.</Text>
			</View>
		);
	}

	return <MealsList listData={displayMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
	emptyText: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoryMealScreen;
