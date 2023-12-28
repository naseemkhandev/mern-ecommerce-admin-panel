import Sidebar from "./Sidebar";

const RootLayout = ({ children }) => {
	return (
		<div className="pl-[19rem]">
			<Sidebar />
			{children}
		</div>
	);
};

export default RootLayout;
