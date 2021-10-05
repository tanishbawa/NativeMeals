import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.name}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor, false: "#ccc" }}
				thumbColor={Colors.primaryColor}
				value={props.state}
				onValueChange={(newValue) => props.onChange(newValue)}
			/>
		</View>
	);
};

const FiltersScreen = (props) => {
	const { navigation } = props;
	const dispatch = useDispatch();

	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const saveFilters = () => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian,
		};

		dispatch(setFilters(appliedFilters));
		// console.log(appliedFilters);
	};

	return (
		<SafeAreaView edges={["top"]} style={styles.safeArea}>
			<View style={styles.mainContainer}>
				<View style={styles.navbar}>
					<Ionicons
						onPress={() => props.navigation.toggleDrawer()}
						name="ios-menu"
						size={30}
						color="white"
						style={styles.hamIcon}
					/>
					<Text style={styles.filterText}>Filters</Text>
					<Entypo
						style={styles.saveIcon}
						name="save"
						size={25}
						color="white"
						onPress={saveFilters}
					/>
				</View>
				<Text style={styles.title}>Available Filters / Restrictions</Text>
				<FilterSwitch
					name="Gluten-Free"
					state={isGlutenFree}
					onChange={setIsGlutenFree}
				/>
				<FilterSwitch
					name="Lactose-Free"
					state={isLactoseFree}
					onChange={setIsLactoseFree}
				/>
				<FilterSwitch name="Vegan" state={isVegan} onChange={setIsVegan} />
				<FilterSwitch
					name="Vegetarian"
					state={isVegetarian}
					onChange={setIsVegetarian}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: Colors.primaryColor,
	},
	mainContainer: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
	},
	navbar: {
		flexDirection: "row",
		height: 50,
		width: "100%",
		backgroundColor: Colors.primaryColor,
		alignItems: "center",
	},
	hamIcon: {
		marginHorizontal: 15,
	},
	filterText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	saveIcon: {
		marginLeft: "auto",
		marginRight: 15,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		margin: 20,
		textAlign: "center",
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginVertical: 15,
	},
});

export default FiltersScreen;
