import { configureStore } from "@reduxjs/toolkit";

import DarkModeReducer from "./slices/DarkModeSlice.js";
import SidebarReducer from "./slices/SidebarSlice.js";

const store = configureStore({
	reducer: {
		theme: DarkModeReducer,
		sidebar: SidebarReducer,
	},
});

export default store;
