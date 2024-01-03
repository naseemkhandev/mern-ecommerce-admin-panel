import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import data from "../data/data.json";
import { useMemo, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Customers = () => {
	const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 7;

	const columns = ["photo", "name", "email", "gender", "role", "action"];

	const sortedData = useMemo(() => {
		let sortableData = [...data.customers];
		if (sortConfig.key && sortConfig.key !== "action") {
			sortableData.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === "asc" ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === "asc" ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableData;
	}, [data.customers, sortConfig]);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const requestSort = (key) => {
		if (key !== "action") {
			let direction = "asc";
			if (
				sortConfig &&
				sortConfig.key === key &&
				sortConfig.direction === "asc"
			) {
				direction = "desc";
			}
			setSortConfig({ key, direction });
		}
	};

	return (
		<section className="pt-5 pb-2 whitespace-nowrap w-full flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
			<div className="px-5 pb-5 border-b">
				<h2 className="font-semibold text-lg">All Customers</h2>
			</div>

			<div className="flex flex-col gap-6 h-full overflow-auto">
				<table className="w-full select-none cursor-text text-left">
					<thead>
						<tr>
							{columns.map((column) => (
								<th
									key={column}
									className="font-semibold capitalize pl-5 pb-3 text-zinc-700 cursor-pointer"
									onClick={() => requestSort(column)}
								>
									<div className="flex items-center gap-1">
										<span>{column}</span>

										{sortConfig &&
											sortConfig.key === column &&
											column !== "action" && (
												<span>
													{sortConfig.direction === "asc" ? (
														<TiArrowSortedUp />
													) : (
														<TiArrowSortedDown />
													)}
												</span>
											)}
									</div>
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{currentItems.map((item) => (
							<tr key={item.email} className="hover:bg-slate-300/10 w-full">
								<td className="py-1.5 pl-5 text-sm border-b">
									<img
										src={item.photo}
										alt={item.name.slice(0, 10) + "..."}
										className="2xl:w-16 w-12 aspect-square object-cover object-top rounded-full"
									/>
								</td>

								<td className="py-1.5 pl-5 text-sm border-b capitalize">
									{item.name}
								</td>
								<td className="py-1.5 pl-5 text-sm border-b">{item.email}</td>
								<td className="py-1.5 pl-5 text-sm border-b capitalize">
									{item.gender}
								</td>
								<td className="py-1.5 pl-5 text-sm border-b capitalize">
									{item.role}
								</td>
								<td className="border-b px-5">
									<span className="flex items-center gap-2">
										<Link
											to={`/customer/${item.action}`}
											className="text-base p-2.5 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20"
										>
											<FiEdit />
										</Link>
										<Link
											to={`/customer/${item.action}`}
											className="text-base p-2.5 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500/20"
										>
											<FaTrashCan />
										</Link>
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className="flex items-center justify-center px-5 gap-2 pb-4 pt-2 select-none">
					<button
						onClick={() => paginate(currentPage - 1)}
						disabled={currentPage === 1}
						className="bg-slate-300/20 p-2 rounded-full cursor-pointer text-xl flex items-center justify-center text-center hover:bg-slate-400/20 disabled:cursor-not-allowed disabled:text-zinc-400/80 disabled:bg-slate-300/20 disabled:hover:bg-slate-300/20"
					>
						<RiArrowLeftSLine />
					</button>
					<span className="text-sm">
						Page {currentPage}/{Math.ceil(sortedData.length / itemsPerPage)}
					</span>
					<button
						onClick={() => paginate(currentPage + 1)}
						disabled={indexOfLastItem >= sortedData.length}
						className="bg-slate-300/20 p-2 rounded-full cursor-pointer text-xl flex items-center justify-center text-center hover:bg-slate-400/20 disabled:cursor-not-allowed disabled:text-zinc-400/80 disabled:bg-slate-300/20 disabled:hover:bg-slate-300/20"
					>
						<RiArrowRightSLine />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Customers;
