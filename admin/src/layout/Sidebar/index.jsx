import { Link, useLocation } from "react-router-dom";
import { sidebar } from "../../constants/sidebar";
import Search from "../../components/common/Search";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../store/slices/ThemeSlice";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { closeMenu } from "../../store/slices/SidebarSlice";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
	const { pathname } = useLocation();
	const currentPath = pathname.split("/")[1];
	const theme = useSelector(selectTheme);
	const menuState = useSelector((state) => state.sidebar.isToggle);
	const dispatch = useDispatch();

	return (
		<div
			className={`w-full sm:w-80 md:w-[17rem] 2xl:w-72 pt-5 sm:pt-8 pb-5 min-h-screen h-full overflow-y-auto fixed top-0 z-50 no-scrollbar transition-all duration-500 ${
				theme === "dark"
					? "bg-darkColor text-white"
					: "bg-white shadow-2xl shadow-black/20 lg:shadow-slate-400/5"
			} ${menuState ? "left-0" : "-left-full lg:left-0"}`}
		>
			<div className="relative flex flex-col gap-3 px-3">
				<h2 className="text-xl font-semibold">Naseem Store.</h2>
				<div className="w-full md:hidden block">
					<Search className="w-full" />
				</div>

				<span
					onClick={() => dispatch(closeMenu())}
					className={`absolute top-3 md:top-3 lg:top-1/2 right-2 md:right-0 -translate-y-1/2 h-8 aspect-square md:aspect-auto md:h-12 flex items-center justify-center cursor-pointer text-lg md:text-xl rounded-full md:rounded-l-lg lg:hidden ${
						theme === "dark" ? "bg-darkBg" : "bg-blue-500/5"
					}`}
				>
					<IoClose className="md:hidden" />
					<MdOutlineKeyboardArrowLeft className="md:block hidden" />
				</span>
			</div>

			<ul className="flex flex-col gap-3 mt-8 capitalize">
				{sidebar.map((items) => (
					<>
						<li
							key={items.title}
							className={`mt-1 uppercase font-semibold text-sm px-5 md:px-3 ${
								theme === "dark" ? "text-white" : "text-zinc-500"
							}`}
						>
							{items.title}
						</li>

						<ul className="flex flex-col gap-1">
							{items.links.map((link) => {
								const Icon = link.icon;
								const ActiveIcon = link.activeIcon;

								return (
									<li key={link.path}>
										<Link
											to={link.path}
											className={`w-full px-5 md:px-3 py-4 2xl:text-base text-[0.9rem] hover:bg-blue-500/10 flex items-center gap-1 relative before:absolute before:top-0 before:right-0 before:w-1 before:h-full before:bg-blue-600 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 ${
												theme === "dark"
													? "hover:text-white"
													: "hover:text-blue-600"
											} ${
												currentPath === link.path.split("/")[1] &&
												`${
													theme === "dark"
														? "text-white bg-blue-500/10 before:scale-100"
														: "bg-blue-500/10 text-blue-600 before:scale-100"
												}`
											}`}
										>
											<span className="text-[1.1rem] 2xl:text-xl">
												{currentPath === link.path.split("/")[1] ? (
													<ActiveIcon />
												) : (
													<Icon />
												)}
											</span>
											<span>{link.label}</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
