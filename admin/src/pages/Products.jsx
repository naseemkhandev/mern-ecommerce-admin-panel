import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import data from "../data/data.json";
import { useMemo, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { selectTheme } from "../store/slices/themeSlice";
import { useSelector } from "react-redux";

const Products = () => {
	const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 7;

	const columns = ["photo", "name", "price", "stock", "action"];

	const theme = useSelector(selectTheme);

	const sortedData = useMemo(() => {
		let sortableData = [...data.products];
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
	}, [data.products, sortConfig]);

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
		<section
			className={`pt-4 pb-2 whitespace-nowrap w-full flex flex-col gap-4 rounded-lg ${
				theme === "dark"
					? "bg-darkColor text-white"
					: "bg-white shadow-lg shadow-slate-400/5"
			}`}
		>
			<div className="px-5 pb-3 border-b flex items-center justify-between">
				<h2 className="font-semibold text-lg">All Products</h2>
				<Link
					to="/product/new"
					className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg"
				>
					<span className="text-base md:text-xl">
						<IoIosAddCircle />
					</span>
					<span className="text-sm md:text-base">Add New</span>
				</Link>
			</div>

			<div className="flex flex-col gap-6 h-full overflow-auto">
				<table className="w-full select-none cursor-text text-left">
					<thead>
						<tr>
							{columns.map((column) => (
								<th
									key={column}
									className={`font-semibold capitalize pl-5 pb-3 cursor-pointer ${
										theme !== "dark" && "text-zinc-700"
									}`}
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
							<tr
								key={item.action}
								className={`w-full ${
									theme === "dark"
										? "hover:bg-darkBg/50"
										: "hover:bg-slate-300/10"
								}`}
							>
								<td
									className={`py-1.5 pl-5 text-sm border-b ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									<img
										src={item.photo}
										alt={item.name.slice(0, 10) + "..."}
										className="2xl:w-20 w-16 aspect-square object-cover object-center"
									/>
								</td>
								<td
									className={`py-1.5 pl-5 text-sm border-b ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									{item.name.length > 40
										? item.name.slice(0, 40) + "..."
										: item.name}
								</td>
								<td
									className={`py-1.5 pl-5 text-sm border-b ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									{item.price}
								</td>
								<td
									className={`py-1.5 pl-5 text-sm border-b ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									{item.stock}
								</td>
								<td
									className={`border-b px-5 ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									<span className="flex items-center gap-2">
										<Link
											to={`/product/${item.action}`}
											className="text-base p-2.5 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20"
										>
											<FiEdit />
										</Link>
										<Link
											to={`/product/${item.action}`}
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
						className={`p-2 rounded-full disabled:cursor-not-allowed cursor-pointer text-xl flex items-center justify-center text-center ${
							theme === "dark"
								? "bg-white hover:bg-white/80 disabled:bg-white/10 disabled:text-white/20 text-black"
								: "bg-slate-300/20 hover:bg-slate-400/20 disabled:text-zinc-400/80 disabled:bg-slate-300/20 disabled:hover:bg-slate-300/20"
						}`}
					>
						<RiArrowLeftSLine />
					</button>
					<span className="text-sm">
						Page {currentPage}/{Math.ceil(sortedData.length / itemsPerPage)}
					</span>
					<button
						onClick={() => paginate(currentPage + 1)}
						disabled={indexOfLastItem >= sortedData.length}
						className={`p-2 rounded-full cursor-pointer disabled:cursor-not-allowed text-xl flex items-center justify-center text-center ${
							theme === "dark"
								? "bg-white hover:bg-white/80 disabled:bg-white/10 disabled:text-white/20 text-black"
								: "bg-slate-300/20 hover:bg-slate-400/20 disabled:text-zinc-400/80 disabled:bg-slate-300/20 disabled:hover:bg-slate-300/20"
						}`}
					>
						<RiArrowRightSLine />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Products;
