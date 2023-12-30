import { Link, useLocation } from "react-router-dom";

import { sidebar } from "../../constants/sidebar";
import Search from "../../components/common/Search";

const Sidebar = () => {
	const { pathname } = useLocation();

	return (
		<div className="w-full sm:w-80 md:w-[17rem] 2xl:w-72 py-8 px-3 bg-white shadow-2xl shadow-slate-400/5 h-screen overflow-y-auto fixed top-0 -left-full z-50 lg:left-0 no-scrollbar">
			<div className="flex flex-col gap-3">
				<h2 className="text-xl font-semibold">Naseem Store.</h2>
				<div className="w-full md:hidden block">
					<Search className="w-full" />
				</div>
			</div>

			<ul className="flex flex-col gap-3 mt-8 capitalize">
				{sidebar.map((items) => (
					<>
						<li
							key={items.title}
							className="mt-1 text-zinc-500 uppercase font-semibold text-sm"
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
											className={`w-full p-3.5 2xl:text-base text-[0.9rem] rounded-lg hover:bg-blue-600 hover:text-white flex items-center gap-1 ${
												pathname === link.path && "bg-blue-600 text-white"
											}`}
										>
											<span className="text-[1.1rem] 2xl:text-xl">
												{pathname === link.path ? <ActiveIcon /> : <Icon />}
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
