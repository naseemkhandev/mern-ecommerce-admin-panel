import { useMemo, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import data from "../../data/data.json";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/slices/DarkModeSlice";

const columns = ["Id", "Quantity", "Discount", "Amount", "Status"];

const TopTransaction = () => {
	const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
	const theme = useSelector(selectTheme);

	const sortedData = useMemo(() => {
		let sortableData = [...data.transaction];
		if (sortConfig.key) {
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
	}, [data.transaction, sortConfig]);

	const requestSort = (key) => {
		let direction = "asc";
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === "asc"
		) {
			direction = "desc";
		}
		setSortConfig({ key, direction });
	};

	return (
		<section
			className={`transition-all duration-500 pt-5 pb-2 lg:h-full w-full xl:max-h-[24rem] xl:h-full 2xl:max-h-[36rem] flex flex-col gap-4 rounded-lg 
		${
			theme === "dark"
				? "bg-darkColor text-white"
				: "bg-white shadow-lg shadow-slate-400/5"
		}
		`}
		>
			{" "}
			<div className="px-5 pb-4 border-b">
				<h2 className="font-semibold">Top Transaction</h2>
			</div>
			<div className="flex flex-col gap-6 pb-2 h-full overflow-auto">
				<table className="w-full select-none cursor-text">
					<thead>
						<tr>
							{columns.map((column) => (
								<th
									key={column}
									className={`font-semibold px-3 sm:px-0 pb-3 cursor-pointer ${
										theme === "dark" ? "text-white" : "text-zinc-700"
									}`}
									onClick={() => requestSort(column.toLowerCase())}
								>
									<div className="flex items-center justify-center gap-1">
										<span>{column}</span>
										{sortConfig && sortConfig.key === column.toLowerCase() && (
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
						{sortedData.map((item) => (
							<tr
								key={item.id}
								className={`${
									theme === "dark"
										? "hover:bg-darkBg/50"
										: "hover:bg-slate-300/10"
								}`}
							>
								<td
									className={`p-3 text-center text-sm border-b
								${theme === "dark" ? "border-white/10" : ""}
								`}
								>
									{item.id}
								</td>
								<td
									className={`py-3 text-center text-sm border-b ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									{item.quantity}
								</td>
								<td
									className={`py-3 text-center text-sm border-b ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									{item.discount}
								</td>
								<td
									className={`py-3 text-center text-sm border-b ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									{item.amount}
								</td>
								<td
									className={`py-3 text-center text-sm border-b ${
										theme === "dark" ? "border-white/10" : ""
									}`}
								>
									<span
										className={`p-1.5 text-center text-xs 2xl:text-sm text-white w-24 capitalize rounded-md flex items-center justify-center mx-auto shadow-md ${
											item.status === "processing" && "bg-red-500"
										} ${item.status === "shipped" && "bg-indigo-500"}
									${item.status === "delivered" && "bg-green-500"}`}
									>
										{item.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default TopTransaction;
