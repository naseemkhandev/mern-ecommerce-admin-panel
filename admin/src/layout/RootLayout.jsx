import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RootLayout = ({ children }) => {
	return (
		<div className="lg:pl-[17rem] 2xl:pl-72">
			<Sidebar />
			<div className="p-3 pb-10 flex flex-col gap-3">
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default RootLayout;
