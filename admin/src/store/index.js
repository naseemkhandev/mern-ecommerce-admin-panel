import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../store/slices/ThemeSlice";
import SidebarReducer from "../store/slices/SidebarSlice";

const store = configureStore({
	reducer: {
		theme: ThemeReducer,
		sidebar: SidebarReducer,
	},
});

export default store;
