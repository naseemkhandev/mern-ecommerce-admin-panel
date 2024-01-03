import { VscLoading } from "react-icons/vsc";

const Loader = () => {
	return (
		<div className="flex items-center justify-center gap-2 fixed top-0 left-0 w-full h-screen bg-white text-blue-600 z-[10000] dark:bg-black dark:text-white select-none">
			<span className="text-5xl md:text-6xl animate-spin">
				<VscLoading />
			</span>
			<p className="font-medium">
				<span className="text-4xl md:text-5xl animate-pulse duration-100">
					Loading
				</span>{" "}
				<span className="animate-ping text-4xl md:text-5xl">.</span>
				<span className="animate-ping text-4xl md:text-5xl">.</span>
				<span className="animate-ping text-4xl md:text-5xl">.</span>
			</p>
		</div>
	);
};

export default Loader;
