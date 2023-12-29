import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaBell, FaUser } from "react-icons/fa";
import { PiSunDimFill } from "react-icons/pi";
import { RiMoonClearFill } from "react-icons/ri";

const Navbar = () => {
	const { pathname } = useLocation();
	const pathSegments = pathname.split("/");

	const currentRoute = pathSegments[pathSegments.length - 1];

	const theme = "light";

	return (
		<div className="bg-white py-3 px-5 rounded-lg shadow-lg shadow-slate-400/5 flex items-center justify-between">
			<div>
				<h2 className="text-xl capitalize font-semibold">{currentRoute}</h2>
			</div>

			<div className="flex items-center gap-2">
				<div className="relative">
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Search here..."
						className="border-none outline-none bg-[#F7F8F9] py-3 text-[.9rem] 2xl:text-base pr-4 pl-10 w-72 rounded-md"
					/>
					<span className="absolute top-1/2 left-3 -translate-y-1/2 text-blue-600 text-xl 2xl:text-2xl">
						<FiSearch />
					</span>
				</div>
				<span className="bg-orange-500/10 hover:bg-orange-500/20 cursor-pointer text-orange-500 p-3 rounded-md text-xl 2xl:text-2xl">
					<FaBell />
				</span>
				<span className="bg-green-500/10 hover:bg-green-500/20 cursor-pointer text-green-500 p-3 rounded-md text-xl 2xl:text-2xl">
					<FaUser />
				</span>
				{theme === "light" ? (
					<span className="bg-yellow-500/10 hover:bg-yellow-500/20 cursor-pointer text-yellow-500 p-2.5 rounded-md text-2xl 2xl:text-2xl">
						<PiSunDimFill />
					</span>
				) : (
					<span className="bg-yellow-500/10 hover:bg-yellow-500/20 cursor-pointer text-yellow-500 p-2.5 rounded-md text-2xl 2xl:text-2xl">
						<RiMoonClearFill />
					</span>
				)}
			</div>
		</div>
	);
};

export default Navbar;
