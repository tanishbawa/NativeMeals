import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealsList = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
				onSelect={() => {
					props.navigation.navigate("MealDetails", {
						mealId: itemData.item.id,
					});
				}}
			/>
		);
	};

	return (
		<View style={styles.list}>
			<FlatList
				data={props.listData}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
				style={{ width: "95%", marginTop: 10 }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default MealsList;
