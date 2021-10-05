import React, { useLayoutEffect } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

//COMPONENTS
import HeaderButton from "../components/HeaderButton";

const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<Text>{props.children}</Text>
		</View>
	);
};

const MealDetailScreen = (props) => {
	const availableMeals = useSelector((state) => state.meals.meals);

	const mealId = props.route.params.mealId;
	const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

	const { navigation } = props;
	useLayoutEffect(() => {
		navigation.setOptions({
			title: selectedMeal.title,
			headerRight: () => <HeaderButton mealId={mealId} selectedMeal={selectedMeal} />,
		});
	}, [navigation]);

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			<View style={{ ...styles.mealsRow, ...styles.details }}>
				<Text>{selectedMeal.duration}m</Text>
				<Text>{selectedMeal.complexity.toUpperCase()}</Text>
				<Text>{selectedMeal.affordability.toUpperCase()}</Text>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient, index) => (
				<ListItem key={index}>{ingredient}</ListItem>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((step, index) => (
				<ListItem key={index}>{step}</ListItem>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 10,
	},
});

export default MealDetailScreen;
