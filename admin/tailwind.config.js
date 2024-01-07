/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins"],
			},
			colors: {
				darkBg: "#0B1437",
				darkColor: "#111C44",
			},
		},
	},
};
