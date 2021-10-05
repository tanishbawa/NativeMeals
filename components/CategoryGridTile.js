import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = (props) => {
	const styles = StyleSheet.create({
		gridItem: {
			flex: 1,
			margin: 15,
			height: 150,
		},
		textContainer: {
			width: "100%",
			height: "100%",
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
            padding: 15,
			backgroundColor: props.backgroundColor,
			borderRadius: 10,
			elevation: 5,
		},
		textItem: {
			fontSize: 20,
            color: 'black',
            fontWeight: 'bold'
		},
	});

	return (
		<TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
			<View style={styles.textContainer}>
				<Text style={styles.textItem}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CategoryGridTile;
