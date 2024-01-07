import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./slices/ThemeSlice";
import SidebarReducer from "./slices/SidebarSlice";

const store = configureStore({
	reducer: {
		theme: ThemeReducer,
		sidebar: SidebarReducer,
	},
});

export default store;
