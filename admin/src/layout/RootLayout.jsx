import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

import ScrollTop from "../components/ScrollToTop";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const RootLayout = ({ children }) => {
	const [progress, setProgress] = useState(0);
	const { pathname } = useLocation();

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
		<div className="lg:pl-[17rem] 2xl:pl-72">
			<Sidebar />
			<div className="p-3 pb-10 flex flex-col gap-3">
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
