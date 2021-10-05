import React from "react";

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

const MealItem = (props) => {
	return (
		<TouchableOpacity style={styles.mealItem} onPress={props.onSelect}>
			<View>
				<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
					<ImageBackground
						source={{ uri: props.image }}
						style={styles.backgroundImage}
					>
						<Text style={styles.title} numberOfLines={1}>
							{props.title}
						</Text>
					</ImageBackground>
				</View>
				<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
					<Text>{props.duration}m</Text>
					<Text>{props.complexity.toUpperCase()}</Text>
					<Text>{props.affordability}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mealRow: {
		flexDirection: "row",
	},
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: 'hidden',
		marginVertical: 10
	},
	mealHeader: {
		height: "85%",
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
	},
	backgroundImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	title: {
		fontSize: 20,
		color: "white",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		paddingVertical: 5,
		paddingHorizontal: 12,
		textAlign: "center",
	},
});

export default MealItem;
