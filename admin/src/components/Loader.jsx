import { VscLoading } from "react-icons/vsc";
import { selectTheme } from "../store/slices/ThemeSlice";
import { useSelector } from "react-redux";

const Loader = () => {
	const theme = useSelector(selectTheme);

	return (
		<div
			className={`flex items-center justify-center gap-2 fixed top-0 left-0 w-full h-screen z-[10000] select-none ${
				theme === "dark" ? "bg-darkBg text-white" : "bg-white text-blue-600"
			}`}
		>
			<span className="text-4xl md:text-5xl 2xl:text-6xl animate-spin">
				<VscLoading />
			</span>
			<p className="font-medium">
				<span className="text-3xl md:text-4xl 2xl:text-5xl animate-pulse duration-100">
					Loading
				</span>{" "}
				<span className="animate-ping text-3xl md:text-4xl 2xl:text-5xl">
					.
				</span>
				<span className="animate-ping text-3xl md:text-4xl 2xl:text-5xl">
					.
				</span>
				<span className="animate-ping text-3xl md:text-4xl 2xl:text-5xl">
					.
				</span>
			</p>
		</div>
	);
};

export default Loader;
