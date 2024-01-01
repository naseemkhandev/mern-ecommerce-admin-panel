import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaBell, FaUser } from "react-icons/fa";
import { PiSunDimFill } from "react-icons/pi";
import { RiMoonClearFill } from "react-icons/ri";
import Search from "../../components/common/Search";

const Navbar = () => {
	const { pathname } = useLocation();
	const pathSegments = pathname.split("/");

	const currentRoute = pathSegments[pathSegments.length - 1];

	const theme = "light";

	return (
		<div className="bg-white select-none py-3 px-3 sm:px-5 rounded-lg shadow-lg shadow-slate-400/5 flex items-center justify-between">
			<div className="flex items-center gap-2">
				<span className="block lg:hidden text-xl p-2 rounded-full cursor-pointer hover:bg-slate-500/10">
					<FiMenu />
				</span>
				<h2 className="text-lg sm:text-xl capitalize font-semibold">
					{currentRoute === "" ? "Dashboard" : currentRoute}
				</h2>
			</div>

			<div className="flex items-center gap-2">
				<div className="md:block hidden">
					<Search />
				</div>

				<span className="bg-orange-500/10 hover:bg-orange-500/20 cursor-pointer text-orange-500 p-3 rounded-md text-base sm:text-xl 2xl:text-2xl">
					<FaBell />
				</span>
				<span className="bg-green-500/10 hover:bg-green-500/20 cursor-pointer text-green-500 p-3 rounded-md text-base sm:text-xl 2xl:text-2xl">
					<FaUser />
				</span>
				{theme === "light" ? (
					<span className="bg-yellow-500/10 hover:bg-yellow-500/20 cursor-pointer text-yellow-500 p-2.5 rounded-md text-xl sm:text-2xl">
						<PiSunDimFill />
					</span>
				) : (
					<span className="bg-yellow-500/10 hover:bg-yellow-500/20 cursor-pointer text-yellow-500 p-2.5 rounded-md text-xl xl:text-2xl">
						<RiMoonClearFill />
					</span>
				)}
			</div>
		</div>
	);
};

export default Navbar;
