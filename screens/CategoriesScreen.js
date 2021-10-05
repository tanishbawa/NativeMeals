import React, { useLayoutEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";

import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
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

	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				onSelect={() =>
					navigation.navigate("CategoryMeals", {
						categoryId: itemData.item.id,
					})
				}
				backgroundColor={itemData.item.color}
			/>
		);
	};
	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

export default CategoriesScreen;
