import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";

// const fetchFonts = () => {
// 	return Font.loadAsync({
// 		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
// 		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
// 	});
// };

const rootReducer = combineReducers({
	meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
	enableScreens();

	// const [fontLoaded, setFontLoaded] = useState(false);

	// if (!fontLoaded) {
	// 	return (
	// 		<AppLoading
	// 			startAsync={fetchFonts}
	// 			onFinish={() => setFontLoaded(true)}
	// 			onError={(err) => console.log(err)}
	// 		/>
	// 	);
	// }

	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}
