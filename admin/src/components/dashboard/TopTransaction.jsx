import TableHOC from "../hoc/TableHOC";
import data from "../../data/data.json";

const columns = ["Id", "Quantity", "Discount", "Amount", "Status"];

const TopTransaction = () => {
	return (
		<section className="pt-5 pb-2 lg:h-full w-full xl:max-h-[24rem] xl:h-full 2xl:max-h-max flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
			<div className="px-5 pb-4 border-b">
				<h2 className="font-semibold">Top Transaction</h2>
			</div>

			<div className="flex flex-col gap-6 px-5 h-full overflow-y-auto">
				<table className="w-full">
					<thead>
						<tr>
							{columns.map((column) => (
								<th key={column} className="font-semibold text-zinc-700">
									{column}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{data.transaction.map((item) => (
							<tr key={item.id}>
								<td className="pt-3 text-center text-sm">{item.id}</td>
								<td className="pt-3 text-center text-sm">{item.quantity}</td>
								<td className="pt-3 text-center text-sm">{item.discount}</td>
								<td className="pt-3 text-center text-sm">{item.amount}</td>
								<td className="mt-2 p-2 text-center text-sm bg-red-500 text-white w-fit rounded-md flex items-center justify-center mx-auto">{item.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default TopTransaction;
