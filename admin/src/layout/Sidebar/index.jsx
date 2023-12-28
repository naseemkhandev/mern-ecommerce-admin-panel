import { Link, useLocation } from "react-router-dom";

import { sidebar } from "../../constants/sidebar";

const Sidebar = () => {
	const { pathname } = useLocation();

	return (
		<div className="w-72 py-6 px-3 bg-white shadow-2xl shadow-[#0000000e] h-screen overflow-y-auto fixed top-0 left-0">
			<div className="text-xl font-semibold">
				<h2>Naseem Store.</h2>
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
											className={`w-full p-3.5 rounded-lg hover:bg-blue-600 hover:text-white flex items-center gap-1 ${
												pathname === link.path && "bg-blue-600 text-white"
											}`}
										>
											<span className="text-xl">
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
