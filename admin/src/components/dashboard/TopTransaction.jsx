import { useMemo, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import data from "../../data/data.json";

const columns = ["Id", "Quantity", "Discount", "Amount", "Status"];

const TopTransaction = () => {
	const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

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
		<section className="pt-5 pb-2 lg:h-full w-full max-h-[36rem] 2xl:max-h-[36rem] xl:h-full xl:max-h-[24rem] flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
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
									className="font-semibold px-3 sm:px-0 pb-3 text-zinc-700 cursor-pointer"
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
							<tr key={item.id} className="hover:bg-slate-300/10">
								<td className="p-3 text-center text-sm border-b">{item.id}</td>
								<td className="py-3 text-center text-sm border-b">
									{item.quantity}
								</td>
								<td className="py-3 text-center text-sm border-b">
									{item.discount}
								</td>
								<td className="py-3 text-center text-sm border-b">
									{item.amount}
								</td>
								<td className="py-3 text-center text-sm border-b">
									<span
										className={`p-1.5 text-center text-xs 2xl:text-sm text-white w-24 capitalize rounded-md flex items-center justify-center mx-auto shadow-md ${
											item.status === "processing" && "bg-red-500"
										} ${item.status === "shipped" && "bg-blue-500"}
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
