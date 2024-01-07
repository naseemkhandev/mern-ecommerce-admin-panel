import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

import ScrollTop from "../components/ScrollToTop";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/slices/DarkModeSlice";

const RootLayout = ({ children }) => {
	const [progress, setProgress] = useState(0);
	const { pathname } = useLocation();

	const theme = useSelector(selectTheme);

	if (theme === "dark") {
		document.body.style.background = "#0B1437";
	} else {
		document.body.style.background = "#FAFBFD";
	}

	useEffect(() => {
		setProgress(10);

		setTimeout(() => {
			setProgress(80);
		}, 300);
		setTimeout(() => {
			setProgress(100);
		}, 400);
		setTimeout(() => {
			setProgress(0);
		}, 500);
	}, [pathname]);

	return (
		<div
			className={`lg:pl-[17rem] 2xl:pl-72 transition-all duration-500 ${
				theme === "dark" && "bg-darkBg"
			}`}
		>
			<Sidebar />
			<div className="p-3 pb-5 flex flex-col gap-3">
				<LoadingBar
					color="#2563eb"
					progress={progress}
					height={3}
					waitingTime={500}
					onLoaderFinished={() => setProgress(0)}
				/>
				<Navbar />
				<ScrollTop />
				{children}
			</div>
		</div>
	);
};

export default RootLayout;
