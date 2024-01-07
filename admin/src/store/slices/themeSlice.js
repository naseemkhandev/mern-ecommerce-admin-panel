import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
	name: "theme",
	initialState: {
		mode: localStorage.getItem("theme") || "light",
	},
	reducers: {
		toggleTheme: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light";
			localStorage.setItem("theme", state.mode);
		},
	},
});

export const { toggleTheme } = ThemeSlice.actions;
export const selectTheme = (state) => state.theme.mode;

export default ThemeSlice.reducer;
