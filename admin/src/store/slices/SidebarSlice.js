import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
	name: "sidebar",
	initialState: {
		isToggle: false,
	},
	reducers: {
		openMenu: (state) => {
			state.isToggle = true;
		},
		closeMenu: (state) => {
			state.isToggle = false;
		},
	},
});

export const { openMenu, closeMenu } = SidebarSlice.actions;
export default SidebarSlice.reducer;
