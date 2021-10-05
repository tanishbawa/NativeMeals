import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { toggleFavourite } from "../store/actions/meals";
import { useSelector, useDispatch } from "react-redux";

const HeaderButton = (props) => {
	const [isFavourite, setIsFavourite] = useState(false);

	const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);

	useEffect(() => {
		if (favouriteMeals.includes(props.selectedMeal)) {
			setIsFavourite(true);
		}
	});

	const dispatch = useDispatch();

	const toggleFavouriteHandler = () => {
		dispatch(toggleFavourite(props.mealId));
	};
	return (
		<MaterialIcons
			name="favorite"
			size={25}
			color={isFavourite ? "red" : "white"}
			onPress={() => {
				setIsFavourite((prevState) => !prevState);
				toggleFavouriteHandler();
			}}
		/>
	);
};

export default HeaderButton;
